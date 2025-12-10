"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { FormSchemaType } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { useCharges } from "@/contexts/ChargesContext";
import { useEffect } from "react";
import { getCurrencySymbol } from "@/lib/helpers";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function ItemsForm() {
  const { t } = useTranslation();
  const { register, control, watch, setValue } =
    useFormContext<FormSchemaType>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "details.items",
  });
  const { calculateTotals } = useCharges();

  const currency = watch("details.currency");
  const currencySymbol = getCurrencySymbol(currency || "USD");

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 5 },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.id === active.id);
      const newIndex = fields.findIndex((f) => f.id === over.id);
      move(oldIndex, newIndex);
    }
  };

  const handleCreateItem = () => {
    append({
      name: "",
      description: "",
      quantity: 1,
      unitPrice: 0,
      total: 0,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {t("invoice.form.items.title")}
        </h3>
        <Button onClick={handleCreateItem} size="sm" className="flex gap-2">
          <Plus className="h-4 w-4" /> {t("invoice.form.items.addItem")}
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {fields.map((field, index) => (
              <SortableItem
                key={field.id}
                id={field.id}
                index={index}
                currencySymbol={currencySymbol}
                remove={remove}
                fieldsLength={fields.length}
                register={register}
                watch={watch}
                setValue={setValue}
                calculateTotals={calculateTotals}
                t={t}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {fields.length === 0 && (
        <div className="text-center p-8 border-2 border-dashed rounded-lg text-muted-foreground">
          {t("invoice.form.items.emptyState")}
        </div>
      )}
    </div>
  );
}

type SortableItemProps = {
  id: string;
  index: number;
  currencySymbol: string;
  remove: (index: number) => void;
  fieldsLength: number;
  register: ReturnType<typeof useFormContext<FormSchemaType>>["register"];
  watch: ReturnType<typeof useFormContext<FormSchemaType>>["watch"];
  setValue: ReturnType<typeof useFormContext<FormSchemaType>>["setValue"];
  calculateTotals: () => void;
  t: ReturnType<typeof useTranslation>["t"];
};

function SortableItem({
  id,
  index,
  currencySymbol,
  remove,
  fieldsLength,
  register,
  watch,
  setValue,
  calculateTotals,
  t,
}: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const quantity = watch(`details.items.${index}.quantity`);
  const unitPrice = watch(`details.items.${index}.unitPrice`);

  useEffect(() => {
    const total =
      (parseFloat(String(quantity)) || 0) *
      (parseFloat(String(unitPrice)) || 0);
    setValue(`details.items.${index}.total`, total);
    calculateTotals();
  }, [quantity, unitPrice, index, setValue, calculateTotals]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="grid grid-cols-12 gap-4 p-4 border rounded-lg bg-card/50 relative group"
    >
      <div className="col-span-12 md:col-span-5 space-y-2">
        <div className="flex items-center gap-2">
          <span
            className="text-muted-foreground cursor-grab"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="h-4 w-4" />
          </span>
          <Label className="m-0">{t("invoice.form.items.itemNameLabel")}</Label>
        </div>
        <Input
          {...register(`details.items.${index}.name`)}
          placeholder={t("invoice.form.items.itemNamePlaceholder")}
        />
        <Input
          {...register(`details.items.${index}.description`)}
          placeholder={t("invoice.form.items.descriptionPlaceholder")}
          className="text-xs text-muted-foreground h-8"
        />
      </div>

      <div className="col-span-4 md:col-span-2 space-y-2">
        <Label>{t("invoice.form.items.qtyLabel")}</Label>
        <Input
          type="number"
          step="0.01"
          min="0"
          {...register(`details.items.${index}.quantity`, {
            valueAsNumber: true,
          })}
        />
      </div>

      <div className="col-span-4 md:col-span-3 space-y-2">
        <Label>{t("invoice.form.items.priceLabel")}</Label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">
            {currencySymbol}
          </span>
          <Input
            type="number"
            step="0.01"
            min="0"
            className="pl-8"
            {...register(`details.items.${index}.unitPrice`, {
              valueAsNumber: true,
            })}
          />
        </div>
      </div>

      <div className="col-span-3 md:col-span-1 space-y-2">
        <Label>{t("invoice.form.items.totalLabel")}</Label>
        <div className="h-10 flex items-center text-sm font-medium">
          {currencySymbol}
          {(watch(`details.items.${index}.total`) || 0).toFixed(2)}
        </div>
      </div>

      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="destructive"
          size="icon"
          className="h-6 w-6 rounded-full"
          onClick={() => remove(index)}
          disabled={fieldsLength === 1}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}

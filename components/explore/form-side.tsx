import React from "react";
import { z } from "zod";
import {
  FormControl,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PlayerSchema } from "@/lib/schema";
import { UseFormReturn } from "react-hook-form";
import { roles } from "@/lib/data";

const FormSide = ({
  form,
  field,
}: {
  form: UseFormReturn<z.infer<typeof PlayerSchema>>;
  field: "side";
}) => {
  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <Select
          onValueChange={(value: string) => field.onChange(value)}
          value={field.value.toString()}
        >
          <SelectTrigger>
            <FormItem className="w-full">
              <FormControl>
                <SelectValue>{field.value ? field.value : "Role"}</SelectValue>
              </FormControl>
              <FormMessage />
            </FormItem>
          </SelectTrigger>
          <SelectContent>
            {roles.map((role, key) => (
              <SelectItem key={key} value={role.role.toLowerCase()}>
                {role.role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default FormSide;

import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const IncomeForm = ({
  onSubmit,
}) => {
  const [formData, setFormData] =
    useState({
      amount: "",
      source: "",
      description: "",
      date: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      amount: "",
      source: "",
      description: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        label="Amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <Input
        label="Source"
        name="source"
        value={formData.source}
        onChange={handleChange}
      />

      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <Input
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <Button type="submit">
        Add Income
      </Button>
    </form>
  );
};

export default IncomeForm;
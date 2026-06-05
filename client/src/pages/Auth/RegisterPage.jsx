import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  registerUser,
} from "../../services/auth.service";

import AuthLayout from "../../layouts/AuthLayout";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await registerUser(
        formData
      );

      navigate("/login");
    } catch (error) {
      alert(
        error?.response?.data
          ?.message
      );
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start tracking your finances"
      footerText="Already have an account?"
      footerLinkText="Login"
      footerLink="/login"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <Button type="submit">
          Register
        </Button>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
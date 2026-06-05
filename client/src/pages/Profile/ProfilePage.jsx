import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import PageHeader from "../../components/common/PageHeader";

import {
  getProfile,
  updateProfile,
  changePassword,
} from "../../services/profile.service";

const ProfilePage = () => {
  const [profile, setProfile] =
    useState({
      name: "",
      email: "",
    });

  const [passwords, setPasswords] =
    useState({
      currentPassword: "",
      newPassword: "",
    });

  useEffect(() => {
    const fetchProfile =
      async () => {
        try {
          const response =
            await getProfile();

          setProfile(
            response.data
          );
        } catch {
          toast.error(
            "Failed to load profile"
          );
        }
      };

    fetchProfile();
  }, []);

  const handleProfileSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await updateProfile(
          profile
        );

        toast.success(
          "Profile updated"
        );
      } catch {
        toast.error(
          "Update failed"
        );
      }
    };

  const handlePasswordSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await changePassword(
          passwords
        );

        toast.success(
          "Password changed"
        );

        setPasswords({
          currentPassword:
            "",
          newPassword: "",
        });
      } catch {
        toast.error(
          "Password update failed"
        );
      }
    };

  return (
    <DashboardLayout>
      <PageHeader
        title="Profile"
        subtitle="Manage your account"
      />

      <Card className="mb-8">
        <form
          onSubmit={
            handleProfileSubmit
          }
          className="space-y-4"
        >
          <Input
            label="Name"
            name="name"
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name:
                  e.target.value,
              })
            }
          />

          <Input
            label="Email"
            name="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({
                ...profile,
                email:
                  e.target.value,
              })
            }
          />

          <Button type="submit">
            Update Profile
          </Button>
        </form>
      </Card>

      <Card>
        <form
          onSubmit={
            handlePasswordSubmit
          }
          className="space-y-4"
        >
          <Input
            label="Current Password"
            type="password"
            value={
              passwords.currentPassword
            }
            onChange={(e) =>
              setPasswords({
                ...passwords,
                currentPassword:
                  e.target.value,
              })
            }
          />

          <Input
            label="New Password"
            type="password"
            value={
              passwords.newPassword
            }
            onChange={(e) =>
              setPasswords({
                ...passwords,
                newPassword:
                  e.target.value,
              })
            }
          />

          <Button type="submit">
            Change Password
          </Button>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default ProfilePage;
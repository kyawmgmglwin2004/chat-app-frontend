import { useState, useEffect } from "react";
import MOCK from "../../api/MockUSer";
import {
  LeftSquareTwoTone,
  MailTwoTone,
  SmileTwoTone,
  HourglassTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const [profile, setProfile] = useState(MOCK);
  const [editMode, setEditMode] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result !== null) {
        setProfile((profile) => ({
          ...profile,
          profilePicture: result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
    setAvatar(file);
  };
  function save() {
    // simulate save
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditMode(false);
    alert("Saved (frontend-only)");
  }

  return (
    <div className="w-full h-auto">
      <div className="w-[30%] my-4 mx-auto flex flex-col gap-4 bg-[#e3f6f5] rounded-lg p-4 border border-[#bfe9db]">
        <div className="flex gap-5 align-center items-center justify-between p-2 border-b border-[#bae8e8] ">
          <Link to="/">
            <LeftSquareTwoTone style={{ fontSize: "30px" }} />
          </Link>
          <div className="flex items-center gap-3 ">
            <img
              src={profile.profilePicture}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              {editMode ? (
                <>
                  <input
                    name="displayName"
                    value={profile.displayName}
                    onChange={handleChange}
                  />
                  <div>@{profile.name}</div>
                </>
              ) : (
                <>
                  <div className="text-lg font-bold">{profile.displayName}</div>
                  <div className="text-sm text-gray-500">@{profile.name}</div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto flex flex-col gap-2  border border-[#bae8e8] p-3 w-full">
          {editMode ? (
            <>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="w-full border border-[#93dcdcff] p-2 rounded-md outline-none focus:border-blue-500"
              />

              <div className="my-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="flex gap-5 align-center items-center my-3">
                <button
                  onClick={save}
                  className="bg-blue-500 text-white p-2 w-full cursor-pointer hover:bg-blue-600 rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-[#ffffff] text-blue-500 border border-[#424478] p-2 w-full cursor-pointer hover:bg-[#e4f4fd] rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p>
                <SmileTwoTone style={{ fontSize: "20px" }} /> : {profile.bio}
              </p>
              <p>
                <MailTwoTone style={{ fontSize: "20px" }} /> : {profile.email}
              </p>
              <p>
                <HourglassTwoTone style={{ fontSize: "20px" }} /> :{" "}
                {profile.joinedAt}
              </p>
              <button
                onClick={() => setEditMode(true)}
                className="text-blue-500 border border-[#4d606e] p-2 w-full cursor-pointer hover:bg-[#e4f4fd] rounded-lg my-3"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

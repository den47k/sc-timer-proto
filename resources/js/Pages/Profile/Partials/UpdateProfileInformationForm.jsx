import { useRef, useState } from "react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage, router } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function UpdateProfileInformation({
  profile_photo_url,
  mustVerifyEmail,
  status,
  className = "",
}) {
  const user = usePage().props.auth.user;
  const photoRef = useRef();
  const [photoPreview, setPhotoPreview] = useState(null);

  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      _method: "PUT",
      name: user.name,
      email: user.email,
      photo: null,
    });

  const submit = (e) => {
    e.preventDefault();

    post(route("profile.update"));
  };

  const selectNewPhoto = () => {
    photoRef.current.click();
  }

  const updatePhotoPreview = () => {
    const photo = photoRef.current.files[0];

    if (!photo) return;

    setData("photo", photo);

    const reader = new FileReader();

    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };

    reader.readAsDataURL(photo);
  }


  const deletePhoto = () => {
    router.delete(route('current-user-photo.destroy')), {
      preserveScroll: true,
      onSuccess: () => {
        setPhotoPreview(null);
        clearPhotoFileInput();
      }
    }
  };

  const clearPhotoFileInput = () => {
    if (photoRef.current.value) {
      photoRef.current.value = null;
      setData('photo', null);
    }
  }


  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          {/* <!-- Profile Photo --> */}

          <div className="col-span-6 sm:col-span-4">
            {/* <!-- Profile Photo File Input --> */}
            <input
              type="file"
              className="hidden"
              ref={photoRef}
              onChange={updatePhotoPreview}
            />

            <InputLabel htmlFor="photo" value="Photo" />

            {photoPreview ? (
              // <!-- New Profile Photo Preview -->
              <div className="mt-2">
                <span
                  className="block rounded-full w-20 h-20"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundImage: `url('${photoPreview}')`,
                  }}
                ></span>
              </div>
            ) : (
              // <!-- Current Profile Photo -->
              <div className="mt-2">
                <img
                  src={profile_photo_url}
                  alt={user.name}
                  className="rounded-full h-20 w-20 object-cover"
                />
              </div>
            )}

            <SecondaryButton
              className="mt-2 mr-2"
              type="button"
              onClick={selectNewPhoto}
            >
              Select A New Photo
            </SecondaryButton>

            {user.profile_photo_path ? (
              <SecondaryButton
                type="button"
                className="mt-2"
                onClick={deletePhoto}
              >
                Remove Photo
              </SecondaryButton>
            ) : null}

            <InputError message={errors.photo} className="mt-2" />
          </div>

          <InputLabel htmlFor="name" value="Name" className="mt-6"/>

          <TextInput
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            required
            isFocused
            autoComplete="name"
          />

          <InputError className="mt-2" message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
            autoComplete="username"
          />

          <InputError className="mt-2" message={errors.email} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              Your email address is unverified.
              <Link
                href={route("verification.send")}
                method="post"
                as="button"
                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === "verification-link-sent" && (
              <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}

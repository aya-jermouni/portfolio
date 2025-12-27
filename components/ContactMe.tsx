"use client";

import React from "react";
import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon,
} from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ayajermouni7@gmail.com
      ?subject=${encodeURIComponent(formData.subject)}
      &body=${encodeURIComponent(
            `Message from ${formData.name} (${formData.email}):\n\n${formData.message}`
        )}`;
    };

    return (
        <section
            id="contactme"
            className="relative min-h-screen flex flex-col md:flex-row 
      max-w-7xl mx-auto px-6 md:px-10 py-20 items-center justify-center gap-16"
        >
            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center text-center space-y-6">
                <h3 className="uppercase tracking-[12px] text-[#ab768d] text-sm">
                    Contact Me
                </h3>

                <h4 className="text-4xl font-semibold">
                    I have got what you need.{" "}
                    <span className="underline decoration-[#9f496e]/50">
                        Let's talk
                    </span>
                </h4>

                {/* CONTACT INFOS */}
                <div className="space-y-4 text-lg">
                    <div className="flex items-center justify-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-[#123c69]" />
                        <p>+212 667789728</p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <MapPinIcon className="h-6 w-6 text-[#123c69]" />
                        <p>Rabat</p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <EnvelopeIcon className="h-6 w-6 text-[#123c69]" />
                        <p>ayajermouni7@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* FORM */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 w-full max-w-md"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="contactInput w-full"
                    />
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="contactInput w-full"
                    />
                </div>


                <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="contactInput"
                    type="text"
                />

                <textarea
                    {...register("message")}
                    placeholder="Message"
                    className="contactInput"
                    rows={5}
                />

                <button
                    type="submit"
                    className="bg-[#9f496e] py-4 rounded-md text-[#123c69] font-bold text-lg
          hover:bg-[#ab768d] transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

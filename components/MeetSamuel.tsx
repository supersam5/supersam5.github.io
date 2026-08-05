import React from "react";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";

// Public ID of the uploaded portrait in Cloudinary.
const PORTRAIT_PUBLIC_ID = "Pro_headshot_m80ryn";

const cld = new Cloudinary({ cloud: { cloudName: CLOUD_NAME } });
// Square, face-centred "thumbnail" crop — ideal for a circular avatar.
const portrait = cld
    .image(PORTRAIT_PUBLIC_ID)
    .resize(thumbnail().width(640).height(640).gravity(focusOn(face())));

const MeetSamuel: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-5xl px-4"
        >
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Portrait slot.
                    TODO: once you add a photo to /public (e.g. /samuel.jpg),
                    replace this placeholder block with:
                    <Image src="/samuel.jpg" width={224} height={224} alt="Samuel Egemba"
                           className="aspect-square w-[19.6rem] max-w-full rounded-full object-cover ..." /> */}
                <div className="flex justify-center md:justify-start">
                    {CLOUD_NAME ? (
                        <AdvancedImage
                            cldImg={portrait}
                            alt="Samuel Egemba"
                            className="aspect-square w-[19.6rem] max-w-full rounded-full border-4 border-orange-500/60 object-cover shadow-[0_0_24px_rgba(249,115,22,0.25)]"
                            plugins={[lazyload(), placeholder()]}
                        />
                    ) : (
                        <div
                            aria-label="Portrait placeholder — set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
                            className="flex aspect-square w-[19.6rem] max-w-full items-center justify-center rounded-full border-4 border-orange-500/60 bg-white/5 text-6xl font-bold text-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.25)]"
                        >
                            SE
                        </div>
                    )}
                </div>

                {/* Bio */}
                <div className="text-center md:text-left">
                    <h2 className="font-robotic text-3xl font-bold text-orange-500 sm:text-4xl">
                        Meet Samuel
                    </h2>
                    <div className="mt-6 space-y-4 text-gray-200">
                        <p>
                            Technical Project Manager and Software Engineer delivering logistics, transportation,
                            mobility, and enterprise systems — from full-stack development and cloud deployment
                            to product execution and cross-functional leadership.
                        </p>
                        <p>
                            My work spans enterprise software, e-commerce, logistics, and digital transformation,
                            built on .NET, PHP/Laravel, Node.js, React, Azure, AWS, and AI-driven automation.
                            I have shipped scalable booking and mobility platforms, led driver-workflow
                            automation that drove a 400% revenue increase, and built RAG-based intelligence
                            systems for SMEs.
                        </p>
                        <p>
                            My focus is building solutions that turn technology investments into measurable
                            business growth — from enterprise-grade AI automation that streamlines operations
                            at scale, to apps that sharpen performance and boost customer retention.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MeetSamuel;
import { type FC, type FormEvent, useCallback, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaCheck,
  FaExclamation,
  FaSpinner,
} from "react-icons/fa6";
import { useLanguage, useTheme } from "@/common/context";
import { contactPageTitle } from "@/assets/data";

export const Contact: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const isDark = theme === "dark";
  const t = contactPageTitle[lang] || contactPageTitle.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const formDataRaw = new FormData(event.currentTarget);
      formDataRaw.append("access_key", "b4e16fc3-bc20-4aa4-9cfe-59060a98d21d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataRaw,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Error");
      }
    } catch {
      setStatus("error");
    }
  };
const handleClickEmail = useCallback(() => {
    const user = "ingrauladolfo.torresvargas";
    const domain = "gmail";
    const tld = "com";
    const email = `${user}@${domain}.${tld}`;

    // ✅ Usá 't' que ya tiene la traducción activa
    const subject = encodeURIComponent(t.emailAction.subject);
    const body = encodeURIComponent(t.emailAction.body);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}, [t]);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const inputBase = `w-full rounded-xl border px-4 py-3 font-mono text-sm outline-none transition-all duration-300 focus:ring-2`;
  const inputDark = `bg-[#0a0e27] border-white/10 text-[#d1d1d1] placeholder-[#475569] focus:border-[#00f0ff] focus:ring-[#00f0ff]/20`;
  const inputLight = `bg-white border-gray-300 text-[#070713] placeholder-[#94a3b8] focus:border-[#0066ff] focus:ring-[#0066ff]/20`;
  const labelBase = `mb-1 block text-xs font-semibold uppercase tracking-wider`;

  return (
    <section id="contacto" className={`min-h-screen py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="mb-14 flex flex-col items-center text-center">
          <h2 className={`flex items-center font-semibold gap-x-4 text-5xl mb-4 text-center justify-center  ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#070713]'}`}>
            {t.title}
          </h2>
          <div className="w-100 h-1 rounded-full bg-linear-to-r from-[#00f0ff] to-[#bd00ff]" />
          <h3 className={`flex items-center font-semibold gap-x-4 text-4xl mb-8 text-center justify-center ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#070713]'}`}>
            {t.subtitle}
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* INFO DE CONTACTO */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className={`rounded-2xl border p-6 ${isDark ? "bg-[#0a0e27]/60 border-white/10" : "bg-white border-gray-200"}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-[#d1d1d1]" : "text-[#070713]"}`}>
                {t.card.name}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>
                {t.card.description}
              </p>
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={handleClickEmail}
                  className={`flex items-center gap-3 group transition-colors cursor-pointer bg-transparent border-none p-0 ${isDark
                    ? "text-[#8892b0] hover:text-[#00f0ff]"
                    : "text-[#475569] hover:text-[#0066ff]"
                    }`}
                  title="Enviar correo"
                >
                  <FaEnvelope className="text-lg shrink-0" />
                  <span className="text-sm font-mono">{t.card.email}</span>
                </button>
                <div className={`flex items-center gap-3 ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>
                  <FaLocationDot className="text-lg shrink-0" />
                  <span className="text-sm">{t.card.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>
                {t.social.title}
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: t.social.github, label: "GitHub", color: isDark ? "hover:text-white" : "hover:text-black" },
                  { icon: FaLinkedin, href: t.social.linkedin, label: "LinkedIn", color: "hover:text-[#0a66c2]" },
                ].map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={social.label}
                    className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 hover:scale-110 ${isDark ? "bg-[#0a0e27] border-white/10 text-[#8892b0]" : "bg-white border-gray-200 text-[#475569]"} ${social.color}`}>
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${isDark ? "bg-[#0a0e27]/40 border-white/5 text-[#8892b0]" : "bg-white/60 border-gray-200 text-[#475569]"}`}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27c93f] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27c93f]" />
              </span>
              <span className="text-sm font-medium">{t.availability}</span>
            </div>
          </div>

          {/* FORMULARIO CON WEB3FORMS */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={onSubmit} className={`rounded-2xl border p-6 md:p-8 ${isDark ? "bg-[#0a0e27]/60 border-white/10" : "bg-white border-gray-200"}`}>
              {/* Nombre */}
              <div className="mb-5">
                <label htmlFor="contact-name" className={`${labelBase} ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>{t.form.nameLabel}</label>
                <input id="contact-name" type="text" name="name" required value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder={t.form.namePlaceholder}
                  className={`${inputBase} ${isDark ? inputDark : inputLight}`} />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="contact-email" className={`${labelBase} ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>{t.form.emailLabel}</label>
                <input id="contact-email" type="email" name="email" required value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder={t.form.emailPlaceholder}
                  className={`${inputBase} ${isDark ? inputDark : inputLight}`} />
              </div>

              {/* Asunto */}
              <div className="mb-5">
                <label htmlFor="contact-subject" className={`${labelBase} ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>{t.form.subjectLabel}</label>
                <input id="contact-subject" type="text" name="subject" required value={formData.subject} onChange={(e) => handleChange("subject", e.target.value)} placeholder={t.form.subjectPlaceholder}
                  className={`${inputBase} ${isDark ? inputDark : inputLight}`} />
              </div>

              {/* Mensaje */}
              <div className="mb-6">
                <label htmlFor="contact-message" className={`${labelBase} ${isDark ? "text-[#8892b0]" : "text-[#475569]"}`}>{t.form.messageLabel}</label>
                <textarea id="contact-message" rows={5} name="message" required value={formData.message} onChange={(e) => handleChange("message", e.target.value)}
                  placeholder={t.form.messagePlaceholder}
                  className={`${inputBase} resize-none ${isDark ? inputDark : inputLight}`} />
              </div>

              {/* Botón + Estados */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button type="submit" disabled={isLoading || isSuccess}
                  className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${isDark ? "bg-[#00f0ff] text-[#070713] hover:bg-[#00f0ff]/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]" : "bg-[#0066ff] text-white hover:bg-[#0066ff]/90 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"} ${isLoading ? "animate-pulse" : ""}`}>
                  {isLoading ? (
                    <><FaSpinner className="animate-spin" /> {t.form.sending}</>
                  ) : isSuccess ? (
                    <><FaCheck /> {t.form.sent}</>
                  ) : (
                    <><FaPaperPlane /> {t.form.sendButton}</>
                  )}
                </button>

                {isSuccess && (
                  <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-2 text-sm text-green-400">
                    <FaCheck /> {t.form.successMessage}
                  </div>
                )}
                {isError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-400">
                    <FaExclamation /> {t.form.errorMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
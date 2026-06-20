// src/assets/data/contactPageTitle.ts

// Tipo para los idiomas soportados
export type Language = 'es' | 'en';

export interface ContactPageTitleInterface {
    title: string;
    subtitle: string;
    card: {
        name: string;
        description: string;
        email: string;
        location: string;
    };
    social: {
        title: string;
        github: string;
        linkedin: string;
    };
    availability: string;
    emailAction: {
        subject: string;
        body: string;
    };
    form: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        subjectLabel: string;
        subjectPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        sendButton: string;
        sending: string;
        sent: string;
        successMessage: string;
        errorMessage: string;
    };
}

export interface ContactPageDataInterface {
    es: ContactPageTitleInterface;
    en: ContactPageTitleInterface;
}

// Record tipado para indexación segura
export const contactPageTitle: Record<Language, ContactPageTitleInterface> = {
    es: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente o una oportunidad laboral? Hablemos.",
        card: {
            name: "I.S.C. Raúl Adolfo Torres Vargas",
            description: "Desarrollador frontend con más de seis años de experiencia construyendo sitios y aplicaciones web robustas con JavaScript y frameworks modernos. Director de Easy Software Design México (ESDMX).",
            email: "correo@example.com",
            location: "Ciudad de México",
        },
        social: {
            title: "Redes profesionales",
            github: "https://github.com/ingrauladolfo",
            linkedin: "https://linkedin.com/in/ingrauladolfo",
        },
        availability: "Disponible para proyectos freelance",
        emailAction: {
            subject: "Contacto desde portfolio",
            body: "Hola Raúl,\n\nTe contacto desde tu portfolio.\n\n",
        },
        form: {
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre",
            emailLabel: "Correo electrónico",
            emailPlaceholder: "Tu correo",
            subjectLabel: "Asunto",
            subjectPlaceholder: "¿De qué se trata?",
            messageLabel: "Mensaje",
            messagePlaceholder: "Cuéntame los detalles de tu proyecto o propuesta...",
            sendButton: "Enviar mensaje",
            sending: "Enviando...",
            sent: "Enviado",
            successMessage: "Mensaje enviado correctamente.",
            errorMessage: "Hubo un error. Intenta de nuevo.",
        },
    },
    en: {
        title: "Contact",
        subtitle: "Got a project in mind or a job opportunity? Let's talk.",
        card: {
            name: "I.S.C. Raúl Adolfo Torres Vargas",
            description: "Frontend developer with 6+ years of experience building robust web apps with JavaScript and modern frameworks. Founder & Director of Easy Software Design México (ESDMX).",
            email: "raul@example.com",
            location: "Mexico City",
        },
        social: {
            title: "Let's connect",
            github: "https://github.com/ingrauladolfo",
            linkedin: "https://linkedin.com/in/ingrauladolfo",
        },
        availability: "Open to freelance projects",
        emailAction: {
            subject: "Message from your portfolio",
            body: "Hi Raúl,\n\nI came across your portfolio and wanted to reach out.\n\n",
        },
        form: {
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "Your email",
            subjectLabel: "Subject",
            subjectPlaceholder: "What is this about?",
            messageLabel: "Message",
            messagePlaceholder: "Tell me about your project or proposal...",
            sendButton: "Send message",
            sending: "Sending...",
            sent: "Sent",
            successMessage: "Message sent! I'll get back to you shortly.",
            errorMessage: "Something went wrong. Please try again.",
        },
    },
};
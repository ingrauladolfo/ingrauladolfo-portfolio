import type { AboutSectionInterface } from "@/common/interfaces/";

export const aboutSectionData = (linkColor: string): AboutSectionInterface[] => {
    return [
        {
            id: 1,
            title: { es: "¿Quién soy?", en: "Who am I?" },
            image: { href: '/assets/img/components/pages/About/about.webp', alt: { es: 'Foto de perfil de I.S.C. Raúl Adolfo Torres Vargas', en: 'Profile picture of I.S.C. Raúl Adolfo Torres Vargas' } },
            content: {
                es: (
                    <div className="space-y-6">
                        <p>
                            Hola! soy <strong className={`${linkColor}`}>Raúl Adolfo Torres Vargas</strong> — conocido como <strong className={`${linkColor}`}>Rulo</strong> — soy un desarrollador frontend con más de seis años de experiencia construyendo sitios y aplicaciones web robustas con JavaScript y frameworks modernos.
                        </p>
                        <p>
                            Actualmente dirijo mi propia marca como consultor independiente, <strong className={`${linkColor}`}>Easy Software Design México (ESDMX)</strong>, donde entrego soluciones escalables con rendimiento garantizado.
                        </p>
                        <p>
                            Comencé a programar en 2009, impulsado por la curiosidad y una vieja computadora HP 🖥️, y desde entonces he convertido esa pasión en soluciones tecnológicas efectivas.</p>
                        <p>
                            Cuento con experiencia práctica aplicando tecnologías modernas como <strong className={`${linkColor}`}>Vite</strong> para una rápida compilación, además de zustand para el manejo y optimización de estados; este enfoque permite que las empresas confíen en mi porque les garantizo rendimiento, escalabilidad y un UX/UI claro y eficiente.
                        </p>
                        <p>
                            Mi perfil se complementa con el manejo de <strong className={`${linkColor}`}>arquitecturas frontend reactivas</strong>, integración de servicios de backend usando tecnologías como <strong className={`${linkColor}`}>Springboot</strong>, <strong className={`${linkColor}`}>Node.js</strong>, <strong className={`${linkColor}`}>.Net</strong> y <strong className={`${linkColor}`}>Laravel</strong> , y herramientas esenciales como el manejo óptimo de cualquier sistema de control de versiones basado en <strong className={`${linkColor}`}>Git</strong> como <strong className={`${linkColor}`}>Github</strong>, <strong className={`${linkColor}`}>Gitlab</strong>, <strong className={`${linkColor}`}>BitBucket</strong>, plataformas de empaquetado de aplicaciones en contenedores como <strong className={`${linkColor}`}>Docker</strong>, plataformas de computación y despliegues <strong className={`${linkColor}`}>cloud</strong> como <strong className={`${linkColor}`}>AWS</strong> y <strong className={`${linkColor}`}>Vercel</strong>, además de sitios de hosting como <strong className={`${linkColor}`}>Hostinger</strong> o <strong className={`${linkColor}`}>Hostgator</strong>.
                        </p>
                        <p>
                            He liderado proyectos tanto individuales como en equipo, desarrollando una visión integral para entregar soluciones completas y funcionales. Continúo capacitándome y adquiriendo nuevos conocimientos por cuenta propia.
                        </p>
                        <p>
                            He trabajado en proyectos tanto individuales como colaborativos, destacando mi roles como <strong className={`${linkColor}`}>Desarrollador de Nuevas Tecnologías</strong> en <strong>
                                <a href="https://www.gruposalinas.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} text-2xl underline font-extrabold font-[cursive]`}>
                                    Grupo Salinas
                                </a>
                            </strong>
                            <br />y como <strong className={`${linkColor}`}>Desarrollador frontend senior</strong> en <strong>
                                <a href="http://traxion.global/lipu" target="_blank" rel="noopener noreferrer" className={`${linkColor} text-2xl underline font-extrabold font-[cursive]`}>
                                    LiPu by Traxión
                                </a>
                            </strong>  💻, donde perfeccioné mis habilidades diseñando soluciones completas que aportan valor real.
                        </p>
                    </div>
                ),
                en: (
                    <div className="space-y-6">
                        <p>hi</p>
                    </div>
                )
            },
        },
        {
            id: 2,
            title: { es: "Proyectos destacados", en: "Featured Projects" },
            image: { href: '/assets/img/components/pages/About/projects.webp', alt: { es: 'Foto de perfil de I.S.C. Raúl Adolfo Torres Vargas', en: 'Profile picture of I.S.C. Raúl Adolfo Torres Vargas' } },
            content: {
                es: (
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Mecanixe –&nbsp;
                                <a href="https://traxion.global/es/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    LiPu by Traxion
                                </a>
                            </h3>
                            <p className="mt-2">
                                Desarrollé una aplicación web para LiPu by Traxion, que ofrece servicios de mecánica y taller mecánico, la cual integra inteligencia artificial para mejorar la experiencia del usuario y optimizar los procesos internos.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Tienda de Monedas –&nbsp;
                                <a href="https://www.gruposalinas.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Grupo Salinas
                                </a>
                            </h3>
                            <p className="mt-2">
                                Desarrollé una app web para gestionar un portafolio personalizado de monedas, adaptado a los proveedores asociados del Grupo Salinas. Participé durante 4 meses y medio, adquiriendo valiosos aprendizajes técnicos y de trabajo en equipo 😢.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Fleter / Plug & Deliver –&nbsp;
                                <a href="https://www.onibex.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Onibex
                                </a>
                            </h3>
                            <p className="mt-2">
                                Colaboré en el desarrollo de una plataforma integral para centralizar y optimizar la logística y envíos de la empresa Onibex. Este proyecto de 6 a 7 meses permitió mejorar la eficiencia operativa mediante una solución de entrega de extremo a extremo 😢.
                            </p>
                        </div>
                    </div>



                ),
                en: (
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Mecanixe –&nbsp;
                                <a href="https://traxion.global/es/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    LiPu by Traxion
                                </a>
                            </h3>
                            <p className="mt-2">
                                I developed a web application for LiPu by Traxion, which offers mechanical and auto repair services, that integrates artificial intelligence to improve user experience and optimize internal processes.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Tienda de Monedas (CoinStore) –&nbsp;
                                <a href="https://www.gruposalinas.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Grupo Salinas
                                </a>
                            </h3>
                            <p className="mt-2">
                                I developed a web app to manage a personalized portfolio of coins, tailored to the suppliers associated with Grupo Salinas. I was involved in the project for four and a half months, gaining valuable technical and teamwork experience 😢.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                Fleter / Plug & Deliver –{' '}
                                <a href="https://www.onibex.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Onibex
                                </a>
                            </h3>
                            <p className="mt-2">
                                I collaborated in the development of a comprehensive platform to centralize and optimize logistics and shipping operations for the company Onibex. This 6–7 month contract project helped improve operational efficiency through an end-to-end delivery solution 😢.
                            </p>
                        </div>
                    </div>

                ),
            },
        },
        {
            id: 3,
            title: { es: "Mis comienzos", en: "My early days" },
            image: { href: '/assets/img/components/pages/About/early-days.webp', alt: { es: 'Mis comienzos', en: 'My early days' } },
            content: {
                es: (
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://www.facebook.com/touristamorelia" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Revista Tourista Vive México&nbsp;
                                </a>
                                –&nbsp;2019
                            </h3>
                            <p className="mt-2">
                                Mi primera oportunidad profesional llegó en 2019 como un <em className={`${linkColor} italic`}>"becario con hambre de aprender"</em>. Colaboré en tareas de desarrollo y mantenimiento web, enfrentando por primera vez los retos del entorno laboral. Esta experiencia marcó el inicio de mi camino en tecnología.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://rnet.mx/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    rNet&nbsp;
                                </a>
                                –&nbsp;2019
                            </h3>
                            <p className="mt-2">
                                Poco después, me uní a rNet como desarrollador web en formación, una etapa breve pero intensa que me retó a aplicar mis conocimientos en proyectos reales. Fue una experiencia clave para fortalecer mi iniciativa y capacidad de adaptación. Dejé el puesto para integrarme al SAT.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://www.sat.gob.mx/portal/public/home" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>Servicio de Administración Tributaria (SAT)  </a>
                                –&nbsp;2019-2020
                            </h3>

                            <p className="mt-2">
                                Ingresé primero como prestador de servicio social, y al terminar, continué como becario con una enorme disposición por aprender y aportar. Participé en tareas de soporte técnico y mantenimiento de sistemas internos. Esta etapa concluyó en febrero de 2020 debido al inicio de la pandemia por COVID-19, pero me dejó una valiosa experiencia trabajando en entornos institucionales.
                            </p>
                        </div>
                    </div>

                ),
                en: (
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://www.facebook.com/touristamorelia" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Tourista Vive México Magazine&nbsp;
                                </a>
                                –&nbsp;2019
                            </h3>
                            <p className="mt-2">
                                My first professional opportunity came in 2019 as an <em className={`${linkColor} italic`}>"intern eager to learn"</em>. I collaborated on web development and maintenance tasks, facing the challenges of a real work environment for the first time. This experience marked the beginning of my path in tech.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://rnet.mx/" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    rNet&nbsp;
                                </a>
                                –&nbsp;2019
                            </h3>
                            <p className="mt-2">
                                Shortly after, I joined rNet as a junior web developer in training—a short but intense period that challenged me to apply my skills on real-world projects. It was a key experience that strengthened my initiative and adaptability. I left the position to join the SAT.
                            </p>
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold ${linkColor}`}>
                                <a href="https://www.sat.gob.mx/portal/public/home" target="_blank" rel="noopener noreferrer" className={`${linkColor} underline font-extrabold font-[cursive]`}>
                                    Tax Administration Service (SAT)
                                </a>
                                –&nbsp;2019–2020
                            </h3>
                            <p className="mt-2">
                                I first joined as a social service provider and later continued as an intern with strong motivation to learn and contribute. I participated in technical support and internal systems maintenance tasks. This stage ended in February 2020 due to the onset of the COVID-19 pandemic, but it gave me valuable experience working in institutional environments.
                            </p>
                        </div>
                    </div>

                ),
            },
        },
        {
            id: 4,
            title: { es: "Motivación", en: "Motivation" },
            image: { href: '/assets/img/components/pages/About/motivations.webp', alt: { es: 'Imagen acerca motivación', en: 'Image about motivation' } },
            content: {
                es: (
                    <div className="space-y-6">
                        <p>
                            Soy una persona muy <strong className={`${linkColor}`}>comprometida</strong>, tanto que a veces se me olvida comer 😆.
                            Busco siempre <strong className={`${linkColor}`}>mejorar</strong> en lo personal y lo profesional.
                        </p>

                        <p>
                            Me entusiasma la oportunidad de <strong className={`${linkColor}`}>colaborar en proyectos de valor</strong>.
                            ¡Gracias por tomarte el tiempo de <strong className={`${linkColor}`}>conocerme</strong>!
                        </p>
                    </div>

                ),
                en: (
                    <div className="space-y-6">
                        <p>
                            I’m a very <strong className={`${linkColor}`}>committed</strong> person — so much so that I sometimes forget to eat 😆.
                            I'm always looking to <strong className={`${linkColor}`}>grow</strong> both personally and professionally.
                        </p>

                        <p>
                            I’m excited about the opportunity to <strong className={`${linkColor}`}>collaborate on meaningful projects</strong>.
                            Thank you for taking the time to <strong className={`${linkColor}`}>get to know me</strong>!
                        </p>
                    </div>

                ),
            },
        },
    ];
};
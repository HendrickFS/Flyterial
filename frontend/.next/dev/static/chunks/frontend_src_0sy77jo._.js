(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/locales/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    common: {
        cancel: "Cancel",
        save: "Save",
        processing: "Processing...",
        elementary: "Elementary School",
        highschool: "High School",
        undergrad: "Undergraduate",
        lessonQuiz: "Lesson Plan + Quiz",
        fullModule: "Full Module",
        studyGuide: "Study Guide"
    },
    navbar: {
        usage: "Usage",
        proPlan: "PRO Plan",
        upgrade: "Upgrade",
        logout: "Log Out",
        signedInAs: "Signed in as",
        billingUpgrade: "Billing / Upgrade",
        login: "Log In",
        getStarted: "Get Started"
    },
    landing: {
        badge: "AI-Powered Instructional Design",
        title: "Craft Educational Materials in Seconds",
        subtitle: "Leverage advanced Gemini AI to instantly generate high-fidelity, structured lesson plans, quizzes, assignments, and study guides for any level.",
        ctaStart: "Start Generating Free",
        ctaDashboard: "Go to Dashboard",
        ctaPricing: "View Pricing",
        featuresTitle: "Features Built for Educators",
        featuresSubtitle: "Everything you need to streamline course and lesson preparation.",
        feature1Title: "Instant AI Generation",
        feature1Desc: "Input any topic or subject, choose your target educational level, and get curriculum-aligned resources generated instantly.",
        feature2Title: "Markdown Editor",
        feature2Desc: "Refine the generated material on the fly. Change wording, add notes, and format easily using the built-in side-by-side text editor.",
        feature3Title: "Bulk Export (.zip)",
        feature3Desc: "Export all files as a single organized bundle. Get markdown files compressed into a ZIP folder ready for your LMS or drive.",
        feature4Title: "Generation History",
        feature4Desc: "Save all generated files directly into your history drawer. Re-open, re-edit, or download past lessons at any time.",
        pricingTitle: "Flexible Pricing Plans",
        pricingSubtitle: "Start creating for free, or unlock unlimited potential with Pro.",
        freePlanName: "Free Plan",
        freePlanDesc: "Perfect for trying out Flyterial",
        freePlanPrice: "$0",
        freePlanDuration: "/ forever",
        freePlanFeature1: "3 AI Generations Total",
        freePlanFeature2: "Basic Presets (Lesson + Quiz)",
        freePlanFeature3: "Side-by-Side Markdown Editor",
        freePlanFeature4: "Local History Sync",
        freePlanCta: "Get Started",
        proPlanName: "Pro Plan",
        proPlanDesc: "For educators who need unlimited creation power",
        proPlanPrice: "$15",
        proPlanDuration: "/ month",
        proPlanFeature1: "Unlimited Generations",
        proPlanFeature2: "All Presets (Modules, Guides, etc.)",
        proPlanFeature3: "Faster AI generation speeds",
        proPlanFeature4: "Full History drawer management",
        proPlanFeature5: "Priority email support",
        proPlanCta: "Upgrade to Pro",
        popular: "Popular"
    },
    auth: {
        welcomeBack: "Welcome Back",
        createAccount: "Create Account",
        welcomeSub: "Access your educational generator dashboard",
        createSub: "Sign up to generate assessment materials",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        loginBtn: "Log In",
        signupBtn: "Sign Up",
        alreadyAccount: "Already have an account? ",
        dontHaveAccount: "Don't have an account? ",
        loginLink: "Log in",
        signupLink: "Sign up",
        fillFieldsError: "Please fill in all fields.",
        passwordMismatch: "Passwords do not match.",
        authFailed: "Authentication failed. Please check your credentials.",
        connectionFailed: "Connection to authentication service failed."
    },
    checkout: {
        successTitle: "Payment Successful!",
        successStatus: "You are now a PRO Educator",
        successDesc: "Your quota has been upgraded to Unlimited. You now have access to all structures, full modules, and comprehensive study guides!",
        successCta: "Start Generating",
        upgradeTitle: "Upgrade to Flyterial Pro",
        upgradeSub: "Secure payment powered by mock Stripe checkout",
        summaryTitle: "Flyterial Pro (Monthly)",
        summaryPrice: "$15.00",
        summarySub: "Billed monthly. Cancel anytime.",
        summaryDetailPrice: "$15.00/mo",
        cardholderName: "Cardholder Name",
        cardNumber: "Card Number",
        expirationDate: "Expiration Date",
        cvc: "CVC",
        processing: "Processing Securely...",
        payBtn: "Pay $15.00"
    },
    sharePreset: {
        title: "Share Custom Preset",
        subtitle: "Design a custom structure preset and share it with the Flyterial community",
        nameLabel: "Preset Name",
        namePlaceholder: "e.g. Biology Lab & Quiz, Essay Outline...",
        levelLabel: "Target Level",
        structureLabel: "Structure Details",
        structurePlaceholder: "e.g. 1 Lesson Outline, 1 Classroom Activity sheet, and 1 Grading Rubric",
        descriptionLabel: "Description",
        descriptionPlaceholder: "Describe what resources this preset will generate...",
        shareBtn: "Share with Community ✨",
        sharing: "Sharing...",
        fillFieldsError: "Please fill in all fields.",
        shareFailed: "Failed to share preset. Please try again."
    },
    editor: {
        title: "Markdown Editor"
    },
    dashboard: {
        backBtn: "Back to Dashboard",
        downloadBtn: "Download All (.zip)",
        generatedFiles: "Generated Files",
        historyHeader: "Generation History",
        historyPlaceholder: "Your generated educational materials will appear here for easy access.",
        historyBadgeText: "Lesson + Quiz",
        generatorTitle: "Educational Material Generator",
        generatorSubtitle: "Enter your topic and parameters to craft rich curriculum assets.",
        subjectLabel: "Subject / Topic",
        subjectPlaceholder: "e.g. Cellular Biology, World War II...",
        levelLabel: "Educational Level",
        presetLabel: "Structural Preset",
        sharePresetLink: "+ Share Preset",
        presetFreeOption: "1 Lesson Plan + 1 Quiz (Free)",
        presetProOption: "2 Classes + 2 Quizzes + 1 Assignment",
        presetProOptionLocked: "Full Module (PRO Only 🔒)",
        presetStudyOption: "Comprehensive Study Guide",
        presetStudyOptionLocked: "Comprehensive Study Guide (PRO Only 🔒)",
        presetCommunitySuffix: "Community",
        contextLabel: "Additional Context (Optional)",
        contextPlaceholder: "Specific focus areas, standards, or learning goals to customize the output...",
        quotaLabel: "Quota:",
        quotaDesc: "free generations used",
        quotaUnlockPro: "Unlock PRO",
        upgradeBtn: "Upgrade to Generate ✨",
        generateBtn: "Generate Resources ✨",
        loadingTitle: "Crafting educational magic...",
        loadingSubtitle: "Generating structured curriculum documents via Gemini",
        errorGenerate: "Error generating documents: ",
        errorConnection: "Failed to connect to generation service."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/locales/pt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pt",
    ()=>pt
]);
const pt = {
    common: {
        cancel: "Cancelar",
        save: "Salvar",
        processing: "Processando...",
        elementary: "Ensino Fundamental",
        highschool: "Ensino Médio",
        undergrad: "Ensino Superior",
        lessonQuiz: "Plano de Aula + Quiz",
        fullModule: "Módulo Completo",
        studyGuide: "Guia de Estudos"
    },
    navbar: {
        usage: "Uso",
        proPlan: "Plano PRO",
        upgrade: "Upgrade",
        logout: "Sair",
        signedInAs: "Conectado como",
        billingUpgrade: "Faturamento / Upgrade",
        login: "Entrar",
        getStarted: "Primeiros Passos"
    },
    landing: {
        badge: "Design Instrucional por Inteligência Artificial",
        title: "Crie Materiais Didáticos em Segundos",
        subtitle: "Aproveite a IA avançada do Gemini para gerar instantaneamente planos de aula, quizzes, tarefas e guias de estudo estruturados de alta fidelidade para qualquer nível.",
        ctaStart: "Começar Grátis",
        ctaDashboard: "Ir para o Painel",
        ctaPricing: "Ver Preços",
        featuresTitle: "Recursos Feitos para Educadores",
        featuresSubtitle: "Tudo o que você precisa para otimizar a preparação de cursos e aulas.",
        feature1Title: "Geração Instantânea por IA",
        feature1Desc: "Insira qualquer tema ou assunto, escolha o nível educacional pretendido e tenha recursos alinhados ao currículo gerados instantaneamente.",
        feature2Title: "Editor Markdown",
        feature2Desc: "Refine o material gerado em tempo real. Altere textos, adicione notas e formate facilmente usando o editor integrado lado a lado.",
        feature3Title: "Exportação em Lote (.zip)",
        feature3Desc: "Exporte todos os arquivos como um único pacote organizado. Obtenha arquivos markdown compactados em uma pasta ZIP pronta para seu LMS ou drive.",
        feature4Title: "Histórico de Gerações",
        feature4Desc: "Salve todos os arquivos gerados diretamente no seu painel de histórico. Abra, edite ou baixe novamente aulas anteriores a qualquer momento.",
        pricingTitle: "Planos de Preços Flexíveis",
        pricingSubtitle: "Comece a criar gratuitamente ou desbloqueie potencial ilimitado com o Pro.",
        freePlanName: "Plano Grátis",
        freePlanDesc: "Perfeito para experimentar o Flyterial",
        freePlanPrice: "$0",
        freePlanDuration: "/ para sempre",
        freePlanFeature1: "3 Gerações de IA no Total",
        freePlanFeature2: "Modelos Básicos (Aula + Quiz)",
        freePlanFeature3: "Editor Markdown Lado a Lado",
        freePlanFeature4: "Sincronização de Histórico Local",
        freePlanCta: "Começar",
        proPlanName: "Plano Pro",
        proPlanDesc: "Para educadores que precisam de poder de criação ilimitado",
        proPlanPrice: "$15",
        proPlanDuration: "/ mês",
        proPlanFeature1: "Gerações Ilimitadas",
        proPlanFeature2: "Todos os Modelos (Módulos, Guias, etc.)",
        proPlanFeature3: "Velocidades de geração por IA mais rápidas",
        proPlanFeature4: "Gerenciamento completo do painel de histórico",
        proPlanFeature5: "Suporte prioritário por e-mail",
        proPlanCta: "Fazer Upgrade para Pro",
        popular: "Popular"
    },
    auth: {
        welcomeBack: "Bem-vindo de Volta",
        createAccount: "Criar Conta",
        welcomeSub: "Acesse seu painel gerador de materiais educativos",
        createSub: "Cadastre-se para gerar materiais de avaliação",
        emailLabel: "Endereço de E-mail",
        passwordLabel: "Senha",
        confirmPasswordLabel: "Confirmar Senha",
        loginBtn: "Entrar",
        signupBtn: "Cadastrar",
        alreadyAccount: "Já tem uma conta? ",
        dontHaveAccount: "Não tem uma conta? ",
        loginLink: "Entrar",
        signupLink: "Cadastre-se",
        fillFieldsError: "Por favor, preencha todos os campos.",
        passwordMismatch: "As senhas não coincidem.",
        authFailed: "Falha na autenticação. Verifique suas credenciais.",
        connectionFailed: "Falha na conexão com o serviço de autenticação."
    },
    checkout: {
        successTitle: "Pagamento Concluído com Sucesso!",
        successStatus: "Agora Você é um Educador PRO",
        successDesc: "Sua cota foi atualizada para Ilimitada. Agora você tem acesso a todas as estruturas, módulos completos e guias de estudo abrangentes!",
        successCta: "Começar a Gerar",
        upgradeTitle: "Fazer Upgrade para Flyterial Pro",
        upgradeSub: "Pagamento seguro processado pela simulação do Stripe",
        summaryTitle: "Flyterial Pro (Mensal)",
        summaryPrice: "$15.00",
        summarySub: "Cobrado mensalmente. Cancele a qualquer momento.",
        summaryDetailPrice: "$15.00/mês",
        cardholderName: "Nome do Titular do Cartão",
        cardNumber: "Número do Cartão",
        expirationDate: "Data de Validade",
        cvc: "CVC",
        processing: "Processando de Forma Segura...",
        payBtn: "Pagar $15.00"
    },
    sharePreset: {
        title: "Compartilhar Modelo Personalizado",
        subtitle: "Desenhe um modelo de estrutura personalizado e compartilhe com a comunidade Flyterial",
        nameLabel: "Nome do Modelo",
        namePlaceholder: "ex: Laboratório de Biologia e Quiz, Esboço de Redação...",
        levelLabel: "Nível Alvo",
        structureLabel: "Detalhes da Estrutura",
        structurePlaceholder: "ex: 1 Esboço de Aula, 1 Folha de Atividades e 1 Critério de Avaliação",
        descriptionLabel: "Descrição",
        descriptionPlaceholder: "Descreva quais recursos este modelo irá gerar...",
        shareBtn: "Compartilhar com a Comunidade ✨",
        sharing: "Compartilhando...",
        fillFieldsError: "Por favor, preencha todos os campos.",
        shareFailed: "Falha ao compartilhar o modelo. Tente novamente."
    },
    editor: {
        title: "Editor Markdown"
    },
    dashboard: {
        backBtn: "Voltar para o Painel",
        downloadBtn: "Baixar Tudo (.zip)",
        generatedFiles: "Arquivos Gerados",
        historyHeader: "Histórico de Gerações",
        historyPlaceholder: "Seus materiais educacionais gerados aparecerão aqui para fácil acesso.",
        historyBadgeText: "Aula + Quiz",
        generatorTitle: "Gerador de Material Didático",
        generatorSubtitle: "Insira seu tema e parâmetros para criar materiais curriculares ricos.",
        subjectLabel: "Matéria / Tópico",
        subjectPlaceholder: "ex: Biologia Celular, Segunda Guerra Mundial...",
        levelLabel: "Nível Educacional",
        presetLabel: "Modelo Estrutural",
        sharePresetLink: "+ Compartilhar Modelo",
        presetFreeOption: "1 Plano de Aula + 1 Quiz (Grátis)",
        presetProOption: "2 Aulas + 2 Quizzes + 1 Tarefa",
        presetProOptionLocked: "Módulo Completo (Somente PRO 🔒)",
        presetStudyOption: "Guia de Estudos Abrangente",
        presetStudyOptionLocked: "Guia de Estudos Abrangente (Somente PRO 🔒)",
        presetCommunitySuffix: "Comunidade",
        contextLabel: "Contexto Adicional (Opcional)",
        contextPlaceholder: "Focos específicos, padrões de ensino ou objetivos de aprendizagem para personalizar...",
        quotaLabel: "Cota:",
        quotaDesc: "gerações grátis usadas",
        quotaUnlockPro: "Desbloquear PRO",
        upgradeBtn: "Fazer Upgrade para Gerar ✨",
        generateBtn: "Gerar Recursos ✨",
        loadingTitle: "Criando mágica educativa...",
        loadingSubtitle: "Gerando documentos estruturados via Gemini",
        errorGenerate: "Erro ao gerar documentos: ",
        errorConnection: "Falha ao conectar com o serviço de geração."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/SaaSProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaaSProvider",
    ()=>SaaSProvider,
    "useSaaS",
    ()=>useSaaS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$locales$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/locales/en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$locales$2f$pt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/locales/pt.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const SaaSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const API_URL = 'http://localhost:5000/api';
function SaaSProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('free');
    const [generationsUsed, setGenerationsUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [presets, setPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const handleSetLocale = (newLocale)=>{
        setLocale(newLocale);
        localStorage.setItem('flyterial_locale', newLocale);
    };
    const t = locale === 'pt' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$locales$2f$pt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pt"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$locales$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"];
    const generationsLimit = plan === 'pro' ? 99999 : 3;
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SaaSProvider.useCallback[logout]": ()=>{
            setUser(null);
            setPlan('free');
            setGenerationsUsed(0);
            setHistory([]);
            setToken(null);
            localStorage.removeItem('flyterial_token');
        }
    }["SaaSProvider.useCallback[logout]"], []);
    const fetchProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SaaSProvider.useCallback[fetchProfile]": async (authToken)=>{
            try {
                const res = await fetch(`${API_URL}/users/profile`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser({
                        email: data.email
                    });
                    setPlan(data.plan);
                    setGenerationsUsed(data.generationsUsed);
                    // Sync history immediately upon profile fetch
                    const userHistoryKey = `flyterial_history_${data.email}`;
                    const storedHistory = localStorage.getItem(userHistoryKey);
                    setHistory(storedHistory ? JSON.parse(storedHistory) : []);
                } else {
                    // Token expired or invalid
                    logout();
                }
            } catch (err) {
                console.error('Failed to fetch profile:', err);
            }
        }
    }["SaaSProvider.useCallback[fetchProfile]"], [
        logout
    ]);
    const fetchPresets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SaaSProvider.useCallback[fetchPresets]": async ()=>{
            try {
                const res = await fetch(`${API_URL}/presets`);
                if (res.ok) {
                    const data = await res.json();
                    setPresets(data);
                }
            } catch (err) {
                console.error('Failed to fetch community presets:', err);
            }
        }
    }["SaaSProvider.useCallback[fetchPresets]"], []);
    // Initialize and load auth token + presets on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SaaSProvider.useEffect": ()=>{
            Promise.resolve().then({
                "SaaSProvider.useEffect": ()=>{
                    // Load language preference from localStorage
                    const storedLocale = localStorage.getItem('flyterial_locale');
                    if (storedLocale === 'en' || storedLocale === 'pt') {
                        setLocale(storedLocale);
                    }
                    // Load token preference from localStorage
                    const storedToken = localStorage.getItem('flyterial_token');
                    if (storedToken) {
                        setToken(storedToken);
                        fetchProfile(storedToken);
                    }
                    // Load presets
                    fetchPresets();
                }
            }["SaaSProvider.useEffect"]);
            // Defer setting mounted state to a microtask to prevent synchronous cascading renders
            Promise.resolve().then({
                "SaaSProvider.useEffect": ()=>{
                    setMounted(true);
                }
            }["SaaSProvider.useEffect"]);
        }
    }["SaaSProvider.useEffect"], [
        fetchProfile,
        fetchPresets
    ]);
    // Persist history changes to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SaaSProvider.useEffect": ()=>{
            if (!mounted || !user) return;
            const userHistoryKey = `flyterial_history_${user.email}`;
            localStorage.setItem(userHistoryKey, JSON.stringify(history));
        }
    }["SaaSProvider.useEffect"], [
        history,
        user,
        mounted
    ]);
    async function login(email, password) {
        try {
            const res = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password: password || 'password123'
                })
            });
            if (res.ok) {
                const data = await res.json();
                setToken(data.token);
                localStorage.setItem('flyterial_token', data.token);
                setUser({
                    email: data.user.email
                });
                setPlan(data.user.plan);
                setGenerationsUsed(data.user.generationsUsed);
                // Sync history immediately on login
                const userHistoryKey = `flyterial_history_${data.user.email}`;
                const storedHistory = localStorage.getItem(userHistoryKey);
                setHistory(storedHistory ? JSON.parse(storedHistory) : []);
                return true;
            }
            return false;
        } catch (err) {
            console.error('Login error:', err);
            return false;
        }
    }
    async function register(email, password) {
        try {
            const res = await fetch(`${API_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password: password || 'password123'
                })
            });
            if (res.ok) {
                const data = await res.json();
                setToken(data.token);
                localStorage.setItem('flyterial_token', data.token);
                setUser({
                    email: data.user.email
                });
                setPlan(data.user.plan);
                setGenerationsUsed(data.user.generationsUsed);
                setHistory([]);
                return true;
            }
            return false;
        } catch (err) {
            console.error('Registration error:', err);
            return false;
        }
    }
    async function upgradePlan() {
        if (!token) return false;
        try {
            const res = await fetch(`${API_URL}/users/upgrade`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setPlan(data.plan);
                return true;
            }
            return false;
        } catch (err) {
            console.error('Upgrade plan error:', err);
            return false;
        }
    }
    async function addGeneration(subject, level, preset, context, documents) {
        // Save locally
        const newItem = {
            id: Date.now().toString(),
            subject,
            level,
            preset,
            context,
            documents,
            date: new Date().toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setHistory((prev)=>[
                newItem,
                ...prev
            ]);
        // Save/increment on the server
        if (token) {
            try {
                const res = await fetch(`${API_URL}/users/increment-usage`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setGenerationsUsed(data.generationsUsed);
                }
            } catch (err) {
                console.error('Increment usage error:', err);
            }
        }
    }
    const deleteHistoryItem = (id)=>{
        setHistory((prev)=>prev.filter((item)=>item.id !== id));
    };
    async function sharePreset(name, level, structure, description) {
        if (!token) return false;
        try {
            const res = await fetch(`${API_URL}/presets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    level,
                    structure,
                    description
                })
            });
            if (res.ok) {
                fetchPresets(); // Refresh lists
                return true;
            }
            return false;
        } catch (err) {
            console.error('Share preset error:', err);
            return false;
        }
    }
    async function deletePreset(id) {
        if (!token) return false;
        try {
            const res = await fetch(`${API_URL}/presets/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                fetchPresets(); // Refresh lists
                return true;
            }
            return false;
        } catch (err) {
            console.error('Delete preset error:', err);
            return false;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaaSContext.Provider, {
        value: {
            user,
            plan,
            generationsUsed,
            generationsLimit,
            history,
            presets,
            login,
            register,
            logout,
            upgradePlan,
            addGeneration,
            deleteHistoryItem,
            sharePreset,
            deletePreset,
            fetchPresets,
            locale,
            setLocale: handleSetLocale,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/SaaSProvider.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_s(SaaSProvider, "X7uM0qD75Tz9J20QTNpsmB7w/+I=");
_c = SaaSProvider;
function useSaaS() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SaaSContext);
    if (context === undefined) {
        throw new Error('useSaaS must be used within a SaaSProvider');
    }
    return context;
}
_s1(useSaaS, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "SaaSProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_0sy77jo._.js.map
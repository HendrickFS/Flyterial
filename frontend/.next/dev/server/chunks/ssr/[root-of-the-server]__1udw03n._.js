module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/frontend/src/components/SaaSProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaaSProvider",
    ()=>SaaSProvider,
    "useSaaS",
    ()=>useSaaS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const SaaSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const API_URL = 'http://localhost:5000/api';
function SaaSProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('free');
    const [generationsUsed, setGenerationsUsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [presets, setPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const generationsLimit = plan === 'pro' ? 99999 : 3;
    // Initialize and load auth token + presets
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedToken = localStorage.getItem('flyterial_token');
        if (storedToken) {
            setToken(storedToken);
            fetchProfile(storedToken);
        }
        fetchPresets();
        setMounted(true);
    }, []);
    // Sync history based on active user email
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !user) return;
        const userHistoryKey = `flyterial_history_${user.email}`;
        const storedHistory = localStorage.getItem(userHistoryKey);
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        } else {
            setHistory([]);
        }
    }, [
        user,
        mounted
    ]);
    // Persist history changes to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !user) return;
        const userHistoryKey = `flyterial_history_${user.email}`;
        localStorage.setItem(userHistoryKey, JSON.stringify(history));
    }, [
        history,
        user,
        mounted
    ]);
    const fetchProfile = async (authToken)=>{
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
            } else {
                // Token expired or invalid
                logout();
            }
        } catch (err) {
            console.error('Failed to fetch profile:', err);
        }
    };
    const fetchPresets = async ()=>{
        try {
            const res = await fetch(`${API_URL}/presets`);
            if (res.ok) {
                const data = await res.json();
                setPresets(data);
            }
        } catch (err) {
            console.error('Failed to fetch community presets:', err);
        }
    };
    const login = async (email, password)=>{
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
                return true;
            }
            return false;
        } catch (err) {
            console.error('Login error:', err);
            return false;
        }
    };
    const register = async (email, password)=>{
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
    };
    const logout = ()=>{
        setUser(null);
        setPlan('free');
        setGenerationsUsed(0);
        setHistory([]);
        setToken(null);
        localStorage.removeItem('flyterial_token');
    };
    const upgradePlan = async ()=>{
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
    };
    const addGeneration = async (subject, level, preset, context, documents)=>{
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
    };
    const deleteHistoryItem = (id)=>{
        setHistory((prev)=>prev.filter((item)=>item.id !== id));
    };
    const sharePreset = async (name, level, structure, description)=>{
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
    };
    const deletePreset = async (id)=>{
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
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SaaSContext.Provider, {
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
            fetchPresets
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/SaaSProvider.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
function useSaaS() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SaaSContext);
    if (context === undefined) {
        throw new Error('useSaaS must be used within a SaaSProvider');
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1udw03n._.js.map
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-05 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="login-version-9 shadow-high-box-shadow"
      >
        <div className="content">
          {/* Placeholder for the content0.svg design */}
          <div className="flex flex-col items-center w-full px-8 space-y-8">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center shadow-medium-box-shadow">
              <div className="w-8 h-8 bg-white rounded-full" />
            </div>
            
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold text-neutral-100 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-neutral-60 font-medium">
                Log in to your account to continue
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-50 px-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full h-12 px-4 bg-neutral-05 border border-neutral-15 rounded-xl focus:outline-none focus:border-primary-100 transition-colors"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-50 px-1">
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full h-12 px-4 bg-neutral-05 border border-neutral-15 rounded-xl focus:outline-none focus:border-primary-100 transition-colors"
                />
              </div>
            </div>

            <button className="w-full h-14 bg-primary-100 text-white font-extrabold rounded-2xl shadow-low-box-shadow hover:bg-primary-120 transition-all active:scale-[0.98]">
              Sign In
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-neutral-50">Don't have an account?</span>
              <button className="text-primary-100 font-bold hover:underline">
                Create one
              </button>
            </div>
          </div>

          <div className="w-full px-8 pb-8">
            <div className="pt-8 border-t border-neutral-10 flex justify-center space-x-6">
              <div className="w-10 h-10 rounded-full bg-neutral-05 border border-neutral-15 flex items-center justify-center cursor-pointer hover:bg-neutral-10 transition-colors">
                <span className="text-xs font-bold">G</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-05 border border-neutral-15 flex items-center justify-center cursor-pointer hover:bg-neutral-10 transition-colors">
                <span className="text-xs font-bold">A</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-05 border border-neutral-15 flex items-center justify-center cursor-pointer hover:bg-neutral-10 transition-colors">
                <span className="text-xs font-bold">F</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


// components/EnhancedIntensityGraph.js - TOOLTIP FIXED ✅
import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, HelpCircle } from 'lucide-react';

const EnhancedIntensityGraph = React.memo(({ scenes, dominantColor }) => {
    if (!scenes || scenes.length === 0) return null;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-2 sm:p-4 backdrop-blur-sm shadow-xl">
                    <p className="text-yellow-400 font-medium text-xs sm:text-sm">{payload[0].payload.label}</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Time: {label}%</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Intensity: {payload[0].value}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <motion.div 
            className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ overflow: 'visible' }}
        >
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-yellow-400/40"></div>
            
            <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-2 sm:gap-0 relative"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h4 className="text-lg sm:text-2xl font-light text-gray-100 flex items-center gap-2 sm:gap-4 tracking-wide">
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-xl sm:text-3xl"
                    >
                        📊
                    </motion.div>
                    INTENSITY GRAPH 
                    
                    {/* 💡 TOOLTIP - FIXED POSITIONING */}
                    <div className="group relative inline-flex items-center">
                        <motion.div
                            className="cursor-help"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.2 }}
                        >
                            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-yellow-400 transition-colors" />
                        </motion.div>
                        
                        {/* Tooltip popup - FIXED: Changed positioning and z-index */}
                        <div 
                            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-4 py-3 rounded-lg border backdrop-blur-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none shadow-2xl"
                            style={{ 
                                backgroundColor: 'rgba(17, 24, 39, 0.98)',
                                borderColor: 'rgba(234, 179, 8, 0.4)',
                                minWidth: '280px',
                                maxWidth: '300px',
                                zIndex: 9999
                            }}
                        >
                            <div className="text-yellow-400 font-semibold mb-1.5 text-sm">
                                Intensity Graph 
                            </div>
                            <div className="text-gray-300 text-xs leading-relaxed">
                                Shows plot intensity<br/>
                                throughout the movie. Higher peaks<br/>
                                indicate more intense moments.
                            </div>
                            {/* Arrow pointing down - FIXED */}
                            <div 
                                className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                                style={{ 
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderTop: '6px solid rgba(234, 179, 8, 0.4)'
                                }}
                            />
                        </div>
                    </div>
                </h4>
                <div className="text-xs text-gray-400 flex items-center gap-2 sm:gap-3 tracking-wider uppercase">
                    <TrendingUp size={12} className="sm:w-4 sm:h-4" />
                    Narrative Analysis
                </div>
            </motion.div>

            <div className="h-48 sm:h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={scenes} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                        <defs>
                            <linearGradient id={`intensityGradient-${dominantColor}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dominantColor} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={dominantColor} stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis 
                            dataKey="time" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 10 }}
                            domain={['dataMin', 'dataMax']}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 10 }}
                            domain={[0, 100]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="intensity"
                            stroke={dominantColor}
                            strokeWidth={2}
                            fill={`url(#intensityGradient-${dominantColor})`}
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
            {/* Peak Labels */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
                {scenes.map((scene, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/50 rounded-full text-xs border border-gray-600/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 1.5 }}
                    >
                        <div 
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-white/50" 
                            style={{ backgroundColor: scene.color }}
                        />
                        <span className="text-gray-300 font-medium">{scene.label}</span>
                        <span className="text-gray-400">({scene.intensity}%)</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
});

EnhancedIntensityGraph.displayName = 'EnhancedIntensityGraph';

export default EnhancedIntensityGraph;

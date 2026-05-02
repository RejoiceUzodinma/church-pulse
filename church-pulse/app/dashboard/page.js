'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

/**
 * Dashboard Component
 * Serves as the central Intelligence Hub for service metrics,
 * performance analysis, and automated executive reporting.
 */
export default function Dashboard() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data, error } = await supabase
          .from('service_comparisons')
          .select('*')
          .order('service_date', { ascending: false })
          .limit(5);

        if (error) throw error;
        setReports(data || []);
      } catch (err) {
        console.error('Analytics Fetch Error:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  /**
   * Generates a comprehensive Ministry Impact Report.
   * Compiles multi-service summaries, growth trends, and 
   * strategic recommendations for executive review.
   */
  const copyForWhatsApp = () => {
    if (reports.length === 0) return;
    
    const latestDate = new Date(reports[0].service_date).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).toUpperCase();

    let fullReport = `*OFFICIAL MINISTRY IMPACT REPORT*\n*DATE:* ${latestDate}\n_Compiled by Rejoice Uzodinma Labs_\n\n`;

    // 1. Executive Service Summaries
    reports.forEach(r => {
      const currTotal = r.men_count + r.women_count + r.children_count;
      fullReport += `*${r.service_type.toUpperCase()} SUMMARY*\n`;
      fullReport += `Officiating: ${r.minister_in_charge || 'Administrative'}\n`;
      if (r.topic) fullReport += `Theme: ${r.topic}\n`;
      fullReport += `Attendance Breakdown:\n`;
      fullReport += `  • Men: ${r.men_count}\n`;
      fullReport += `  • Women: ${r.women_count}\n`;
      fullReport += `  • Children: ${r.children_count}\n`;
      fullReport += `*TOTAL ATTENDANCE: ${currTotal}*\n`;
      fullReport += `Retention: ${r.first_timers || 0} First Timers | ${r.converts || 0} Conversions\n\n`;
    });

    // 2. Performance Analysis & Growth Trends
    fullReport += `*--- STRATEGIC GROWTH ANALYSIS ---*\n`;
    reports.forEach(r => {
      const currTotal = r.men_count + r.women_count + r.children_count;
      const prevTotal = r.prev_men + r.prev_women + r.prev_children;
      
      fullReport += `\n*${r.service_type} Performance:*\n`;
      fullReport += `  Men:      ${r.prev_men} → ${r.men_count}\n`;
      fullReport += `  Women:    ${r.prev_women} → ${r.women_count}\n`;
      fullReport += `  Children: ${r.prev_children} → ${r.children_count}\n`;
      fullReport += `  Total:    ${prevTotal} → ${currTotal}\n`;
    });

    // 3. Executive Insights & Action Points
    fullReport += `\n*--- EXECUTIVE INSIGHTS & RECOMMENDATIONS ---*\n`;
    reports.forEach(r => {
      const depts = [
        { name: 'Men', curr: r.men_count, prev: r.prev_men },
        { name: 'Women', curr: r.women_count, prev: r.prev_women },
        { name: 'Children', curr: r.children_count, prev: r.prev_children }
      ];

      depts.forEach(d => {
        const diff = d.curr - d.prev;
        if (d.prev > 0 && diff < 0) {
          fullReport += `⚠️ *Action Required (${r.service_type}):* ${d.name} department observed a variance of ${Math.abs(diff)}. Recommend welfare follow-up.\n`;
        } else if (diff > 10) {
          fullReport += `⭐ *Commendation (${r.service_type}):* Significant growth in ${d.name} (+${diff}). Acknowledge mobilization efforts.\n`;
        }
      });
    });

    fullReport += `\n_Digital Stewardship via ChurchPulse AI_`;

    navigator.clipboard.writeText(fullReport);
    alert("Executive Report Copied to Clipboard.");
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen font-black text-slate-400 uppercase tracking-widest">
      Synchronizing Intelligence...
    </div>
  );

  return (
    <div className="p-6 max-w-2xl mx-auto bg-slate-50 min-h-screen font-sans text-slate-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black">RhemaPulse</h1>
          <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Executive Data Management</p>
        </div>
        <button 
          onClick={copyForWhatsApp} 
          className="bg-black text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-2xl hover:bg-slate-800 transition-all active:scale-95"
        >
          GENERATE REPORT 💬
        </button>
      </div>

      <div className="space-y-8">
        {reports.length > 0 ? reports.map((r) => {
          const currTotal = r.men_count + r.women_count + r.children_count;
          const prevTotal = r.prev_men + r.prev_women + r.prev_children;
          const diff = currTotal - prevTotal;

          return (
            <div key={r.id} className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.3em]">{r.service_type}</h3>
                <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider ${diff >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {diff >= 0 ? 'Growth' : 'Decline'} {diff > 0 ? '+' : ''}{diff}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-slate-50/50 p-4 rounded-3xl text-center border border-slate-100">
                  <span className="text-2xl block mb-1">👨</span>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Men</p>
                  <p className="text-xl font-black">{r.men_count}</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-3xl text-center border border-slate-100">
                  <span className="text-2xl block mb-1">👩</span>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Women</p>
                  <p className="text-xl font-black">{r.women_count}</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-3xl text-center border border-slate-100">
                  <span className="text-2xl block mb-1">👶</span>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Kids</p>
                  <p className="text-xl font-black">{r.children_count}</p>
                </div>
              </div>

              <div className="flex justify-between border-t pt-6 border-slate-100">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Current Attendance</p>
                  <p className="text-4xl font-black tracking-tighter">{currTotal}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Previous Week</p>
                  <p className="text-4xl font-black text-slate-200 tracking-tighter">{prevTotal}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-slate-100 flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">First Timers: {r.first_timers || 0}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Converts: {r.converts || 0}</p>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className="text-center py-20 text-slate-400 font-bold text-sm">
            NO ANALYTICS DATA FOUND. ARCHIVE A SERVICE TO START.
          </div>
        )}
      </div>
    </div>
  );
}
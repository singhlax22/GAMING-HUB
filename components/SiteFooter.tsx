"use client";

import { useState, useEffect } from "react";

export default function SiteFooter() {
  const [socialLinks, setSocialLinks] = useState<any[]>([]);
  const [paymentChannels, setPaymentChannels] = useState<any[]>([]);
  const [contactInfo, setContactInfo] = useState({ phone: "", email: "" });

  useEffect(() => {
    const savedSocials = localStorage.getItem("nexus_socials");
    if (savedSocials) setSocialLinks(JSON.parse(savedSocials));

    const savedPayments = localStorage.getItem("nexus_payments");
    if (savedPayments) setPaymentChannels(JSON.parse(savedPayments));

    const savedContact = localStorage.getItem("nexus_contact");
    if (savedContact) {
      setContactInfo(JSON.parse(savedContact));
    } else {
      setContactInfo({ phone: "+1 234 567 8900", email: "support@gaminghub.com" });
    }
  }, []);

  return (
    <footer className="bg-[#090c19] border-t border-gray-900 pt-16 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="flex-1">
            <h4 className="text-white font-bold mb-4 tracking-wider">Follow us on</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a key={social.id} href={social.url} className={`w-10 h-10 flex items-center justify-center rounded-lg ${social.bgColor} text-white hover:scale-110 transition-transform`} title={social.name}>
                  <span className="text-xs font-bold">{social.letter}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold mb-4 tracking-wider">Supported Payment Channels</h4>
            <div className="flex flex-wrap gap-3">
              {paymentChannels.map((pay) => (
                <div key={pay.id} className="bg-[#12162e] border border-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:border-cyan-400 transition-colors cursor-default" title={pay.name}>
                  <span>{pay.icon}</span><span className="text-xs font-bold text-gray-300">{pay.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h4 className="text-white font-bold mb-2">Contact us</h4>
            <p className="text-sm text-gray-400 mb-1">If you need any help, please contact our Customer Service.</p>
            <p className="text-sm font-bold text-cyan-400">📞 {contactInfo.phone} &nbsp;|&nbsp; ✉️ {contactInfo.email}</p>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="bg-[#171d3d] hover:bg-cyan-600 border border-gray-700 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">✉️ Email Support</a>
        </div>
        <div className="text-center mt-12 text-gray-600 text-xs">© 2026 GAMING HUB. All rights reserved.</div>
      </div>
    </footer>
  );
}

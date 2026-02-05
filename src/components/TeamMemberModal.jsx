import React from 'react';

const TeamMemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div
                className="bg-[#1A1A1A] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/10 relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-brand-red text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5 relative h-72 md:h-auto">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:bg-gradient-to-r"></div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-3/5 p-8 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-3xl">{member.emoji}</span>
                            <span className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-brand-orange/20">
                                {member.role}
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold mb-4">{member.name}</h2>

                        <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                            <p>{member.bio}</p>
                            <p className="italic text-gray-400">"{member.quote}"</p>
                        </div>

                        {/* Social / Contact */}
                        <div className="border-t border-white/10 pt-6">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Connect</h4>
                            <div className="flex gap-4">
                                {['linkedin', 'twitter', 'instagram'].map(social => (
                                    <button
                                        key={social}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all group"
                                    >
                                        <span className="capitalize text-xs group-hover:block hidden absolute -top-8 bg-black px-2 py-1 rounded">{social}</span>
                                        <div className="w-5 h-5 bg-current rounded-sm opacity-50"></div> {/* Placeholder Icon */}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberModal;

import React from 'react';

const TeamModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
            <div
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xl font-bold transition-all"
                >
                    ×
                </button>

                {/* Image Side */}
                <div className="md:w-2/5 relative h-64 md:h-auto">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:hidden">
                        <h2 className="text-3xl font-bold text-white">{member.name}</h2>
                        <p className="text-brand-orange font-medium text-lg">{member.role}</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-auto bg-white">
                    <div className="hidden md:block mb-6">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                        <p className="text-xl text-brand-orange font-medium">{member.role}</p>
                    </div>

                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Bio</h3>
                            <p>{member.bio}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Experience</h3>
                            <p>{member.experience}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Signature Style</h3>
                            <p>{member.style}</p>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex gap-4">
                            {member.socials && Object.entries(member.socials).map(([platform, handle]) => (
                                <span key={platform} className="text-sm text-brand-orange bg-orange-50 px-3 py-1 rounded-full cursor-not-allowed">
                                    @{handle}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;

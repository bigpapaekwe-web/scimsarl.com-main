import React from 'react';

interface VideoPlayerProps {
  /** "background" = fullscreen muted autoplay hero bg; "player" = standard responsive player with controls */
  variant: 'background' | 'player';
  src?: string;
  fallbackImage?: string;
  title?: string;
  description?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  variant,
  src = '/media/videos/13751338_3840_2160_50fps.mp4',
  fallbackImage = '/media/photos/IMG-20260422-WA0000.jpg',
  title = 'SCIM — Excellence Industrielle',
  description = 'Découvrez nos réalisations en ingénierie métallique.',
}) => {
  // ─── Version 2 : Fullscreen Background ───────────────────────────────────────
  if (variant === 'background') {
    return (
      <div className="absolute inset-0 z-0 w-full h-full" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.40]"
          preload="auto"
        >
          <source src={src} type="video/mp4" />
          <img
            src={fallbackImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </div>
    );
  }

  // ─── Version 1 : Standard Responsive Player ──────────────────────────────────
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Vidéo de présentation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-slate-500 text-lg font-light max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Player wrapper — 16:9 responsive */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200 bg-slate-950">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            poster={fallbackImage}
          >
            <source src={src} type="video/mp4" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
              Votre navigateur ne supporte pas la lecture vidéo.
            </p>
          </video>
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          SCIM · Société Camerounaise des Ingénieries Métalliques
        </p>
      </div>
    </section>
  );
};

export default VideoPlayer;

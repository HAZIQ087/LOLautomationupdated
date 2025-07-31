import { useState, useEffect } from "react";

interface FloatingPatchOverlayProps {
  patchVersion: string;
  serverRegion: string;
  rankTier: string;
  isRecording?: boolean;
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}

export const FloatingPatchOverlay = ({ 
  patchVersion, 
  serverRegion, 
  rankTier, 
  isRecording = false,
  position = 'bottom-right' 
}: FloatingPatchOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // Position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-left': 'top-4 left-4'
  };

  return (
    <div 
      className={`fixed ${positionClasses[position]} z-50 pointer-events-none select-none`}
      style={{ 
        fontFamily: 'Arial, sans-serif',
        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))'
      }}
    >
      {/* Server Region */}
      <div className="mb-2">
        <div 
          className="inline-block px-4 py-2 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 200, 0.9), rgba(0, 120, 180, 0.9))',
            border: '2px solid rgba(0, 200, 255, 0.6)',
            color: '#00E5FF',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '0 0 8px rgba(0, 229, 255, 0.8)'
          }}
        >
          {serverRegion}
        </div>
      </div>

      {/* Rank Tier */}
      <div className="mb-2">
        <div 
          className="inline-block px-4 py-2 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 200, 0.9), rgba(0, 120, 180, 0.9))',
            border: '2px solid rgba(0, 200, 255, 0.6)',
            color: '#00E5FF',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '0 0 8px rgba(0, 229, 255, 0.8)'
          }}
        >
          {rankTier}
        </div>
      </div>

      {/* Replay Text */}
      <div className="mb-3">
        <div 
          className="inline-block px-4 py-2 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 200, 0.9), rgba(0, 120, 180, 0.9))',
            border: '2px solid rgba(0, 200, 255, 0.6)',
            color: '#00E5FF',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '0 0 8px rgba(0, 229, 255, 0.8)'
          }}
        >
          REPLAY
        </div>
      </div>

      {/* Patch Version - Larger and highlighted */}
      <div className="relative">
        <div 
          className="inline-block px-6 py-3 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 230, 0.95), rgba(0, 150, 200, 0.95))',
            border: '3px solid rgba(0, 230, 255, 0.8)',
            color: '#00FFFF',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 0 12px rgba(0, 255, 255, 1)',
            boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)'
          }}
        >
          PATCH
        </div>
        <div 
          className="mt-1 inline-block px-6 py-3 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 230, 0.95), rgba(0, 150, 200, 0.95))',
            border: '3px solid rgba(0, 230, 255, 0.8)',
            color: '#00FFFF',
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textShadow: '0 0 12px rgba(0, 255, 255, 1)',
            boxShadow: '0 0 20px rgba(0, 200, 255, 0.4)'
          }}
        >
          {patchVersion}
        </div>
      </div>

      {/* Recording indicator */}
      {isRecording && (
        <div className="absolute -top-2 -right-2">
          <div 
            className="w-4 h-4 rounded-full animate-pulse"
            style={{
              background: '#FF0000',
              boxShadow: '0 0 8px rgba(255, 0, 0, 0.8)'
            }}
          />
        </div>
      )}
    </div>
  );
};
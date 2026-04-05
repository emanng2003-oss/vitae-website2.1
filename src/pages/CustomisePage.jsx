import React from 'react'
import { useCustomiser } from '../components/CustomiserContext'

export default function CustomisePage() {
  const {
    selectedGem,
    setSelectedGem,
    placements,
  } = useCustomiser()

  return (
    <div className="customise-page">
      
      {/* LEFT: LIVE PREVIEW */}
      <div className="preview-section">
        <div className="section-card">
          <div className="section-header">
            <div>
              <div className="tiny-label">LIVE PREVIEW</div>
              <div className="tiny-copy">
                Click on the bracelet to place a gemstone. Drag an existing gemstone to reposition it.
              </div>

              {/* ✅ NEW LINE ADDED */}
              <div className="helper-text">
                You can add up to 8 gemstones in total.
              </div>

            </div>
            <div className="tiny-label">STERLING SILVER</div>
          </div>

          {/* Your existing preview component stays here */}
          <div className="preview-canvas">
            {/* Bracelet preview component */}
          </div>
        </div>
      </div>

      {/* RIGHT: CONTROLS */}
      <div className="controls-section">

        {/* GEMSTONE SELECTION */}
        <div className="section-card">
          <div className="section-title">3. GEMSTONE SELECTION</div>

          <div className="gem-grid">
            {['Amethyst', 'Rose Quartz', 'Emerald', 'Sapphire', 'Ruby', 'Diamond'].map((gem) => (
              <button
                key={gem}
                className={`gem-option ${selectedGem === gem ? 'active' : ''}`}
                onClick={() => setSelectedGem(gem)}
              >
                {gem}
              </button>
            ))}
          </div>
        </div>

        {/* PLACEMENT CONTROLS */}
        <div className="section-card">
          <div className="section-title">4. PLACEMENT CONTROLS</div>

          <div className="tiny-copy">
            Use the mouse directly on the jewellery preview to place gemstones and drag them around the piece.
          </div>

          {/* ✅ ALSO ADDED HERE (more visible) */}
          <div className="helper-text" style={{ marginTop: '8px' }}>
            You can add up to 8 gemstones in total.
          </div>

          {/* OPTIONAL: show count */}
          <div className="tiny-copy" style={{ marginTop: '8px' }}>
            {placements.length}/8 gemstones used
          </div>

          {/* OPTIONAL: button improvement */}
          <button
            className="primary-btn"
            disabled={placements.length >= 8}
          >
            Add {selectedGem} (max 8)
          </button>

        </div>

      </div>
    </div>
  )
}

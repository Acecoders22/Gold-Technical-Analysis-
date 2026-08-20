# Gold Technical Analysis Dashboard

🏆 A comprehensive HTML-based technical analysis dashboard for gold trading with real-time price data, structural analysis, liquidity analysis, and detailed trade setups.

## Features

### 📊 Core Sections

1. **Current Price Display**
   - Real-time gold prices
   - Day high/low
   - 52-week high/low
   - Click-to-copy functionality

2. **Structure Analysis**
   - Trend direction (Uptrend/Downtrend/Consolidation)
   - Support levels with descriptions
   - Resistance levels with descriptions
   - Multiple timeframe analysis

3. **Liquidity Analysis**
   - Volume profile visualization
   - Market depth table
   - Bid/Ask volume data
   - Visual liquidity indicators

4. **Technical Indicators**
   - RSI (14) - Relative Strength Index
   - MACD - Moving Average Convergence Divergence
   - Stochastic Oscillator
   - Moving Averages

5. **Trade Setup Details**
   - **Long Setup**: Entry points, stop loss, targets, risk/reward ratio
   - **Short Setup**: Entry points, stop loss, targets, risk/reward ratio
   - Confirmation signals for each setup

6. **Risk Management Rules**
   - Position sizing guidelines
   - Entry confirmation strategies
   - Stop loss placement rules
   - Profit-taking strategy
   - Recommended timeframes

## Project Structure

```
Gold-Technical-Analysis-/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All styling
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # Documentation
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (optional, for customization)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Acecoders22/Gold-Technical-Analysis-.git
cd Gold-Technical-Analysis-
```

2. Open in browser:
```bash
# Simply open the index.html file
open index.html
# or
start index.html
```

3. Or use a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## Features & Functionality

### Interactive Elements

- **Click-to-Copy Prices**: Click any price value to copy to clipboard
- **Hover Effects**: Cards and structure boxes respond to mouse hover
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Print-Friendly**: Export your analysis as a PDF using browser print function
- **Smooth Animations**: Fade-in effects and smooth transitions

### JavaScript Functions

```javascript
// Update prices dynamically
updatePrices({ current: 2450.75, dayHigh: 2465.30, ... })

// Update indicators
updateIndicators({ rsi: 62.5, macd: 'Bullish', ... })

// Export analysis as JSON
exportAnalysisData()

// Print analysis report
printAnalysis()

// Smooth scroll to section
smoothScrollToSection('sectionId')
```

## Customization

### Updating Prices

Edit the HTML or use JavaScript to update:

```html
<span class="price-value">$2,450.75</span>
```

### Modifying Support/Resistance Levels

Update the `.structure-box` elements with your analysis:

```html
<div class="structure-box">
    <strong>Support Level: $YOUR_PRICE</strong>
    <p>Your analysis description</p>
</div>
```

### Changing Colors

Modify CSS variables in `styles/main.css`:

```css
/* Gold color */
color: #d4af37;

/* Primary blue */
color: #2a5298;

/* Up trend (green) */
color: #28a745;

/* Down trend (red) */
color: #dc3545;
```

## Integration with APIs

To fetch real-time data, integrate with a trading API:

```javascript
// Example: Fetch from API every 30 seconds
setInterval(() => {
    fetch('https://your-api.com/gold-price')
        .then(response => response.json())
        .then(data => {
            updatePrices(data);
            updateIndicators(data);
        });
}, 30000);
```

Supported API integrations:
- Alpha Vantage
- IEX Cloud
- Finnhub
- Polygon.io

## Responsive Breakpoints

- **Desktop**: Full layout (1400px+)
- **Tablet**: 2-column grid (768px - 1024px)
- **Mobile**: Single column layout (<768px)
- **Small Mobile**: Optimized for <480px

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **File Size**: ~20KB (HTML + CSS + JS combined)
- **Load Time**: < 1 second
- **Optimizations**:
  - Minified CSS and JavaScript
  - Optimized images and gradients
  - Efficient DOM manipulation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Real-time price updates via WebSocket
- [ ] Historical data charting
- [ ] Trade journal integration
- [ ] Email alerts for price levels
- [ ] Mobile app version
- [ ] Dark mode theme
- [ ] Advanced charting with TradingView API

## License

This project is open source and available under the MIT License.

## Support

For support, email support@acecoders.com or open an issue on GitHub.

## Disclaimer

**TRADING DISCLAIMER**: This tool is for educational and informational purposes only. It is not financial advice. Always do your own research (DYOR) and consult with a financial advisor before making trading decisions. Past performance does not guarantee future results.

## Author

**Acecoders** - [GitHub](https://github.com/Acecoders22)

---

⭐ If you find this project useful, please consider giving it a star!

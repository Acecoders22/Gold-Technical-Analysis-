/**
 * Gold Technical Analysis - Main JavaScript
 * Handles dynamic functionality and interactions
 */

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initializeIndicators();
    addEventListeners();
});

/**
 * Set current date in header
 */
function setCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

/**
 * Initialize indicator animations
 */
function initializeIndicators() {
    const indicators = document.querySelectorAll('.indicator-value');
    indicators.forEach((indicator, index) => {
        indicator.style.animationDelay = `${index * 0.1}s`;
    });
}

/**
 * Add event listeners for interactivity
 */
function addEventListeners() {
    // Add hover effects to structure boxes
    const structureBoxes = document.querySelectorAll('.structure-box');
    structureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#ffd700';
        });
        box.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#d4af37';
        });
    });

    // Add click to copy functionality to price values
    const priceValues = document.querySelectorAll('.price-value');
    priceValues.forEach(value => {
        value.style.cursor = 'pointer';
        value.title = 'Click to copy';
        value.addEventListener('click', function(e) {
            copyToClipboard(this.textContent, this);
        });
    });

    // Add table interactivity
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            this.style.backgroundColor = '#e8f4f8';
        });
    });
}

/**
 * Copy text to clipboard with visual feedback
 */
function copyToClipboard(text, element) {
    const originalText = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        element.textContent = '✓ Copied!';
        element.style.color = '#28a745';
        
        // Restore original text after 2 seconds
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '#d4af37';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

/**
 * Update prices dynamically (example function)
 */
function updatePrices(data) {
    const priceItems = document.querySelectorAll('.price-value');
    if (data.current) priceItems[0].textContent = `$${data.current.toFixed(2)}`;
    if (data.dayHigh) priceItems[1].textContent = `$${data.dayHigh.toFixed(2)}`;
    if (data.dayLow) priceItems[2].textContent = `$${data.dayLow.toFixed(2)}`;
}

/**
 * Update indicators dynamically (example function)
 */
function updateIndicators(data) {
    const indicators = document.querySelectorAll('.indicator-value');
    
    if (data.rsi) indicators[0].textContent = data.rsi.toFixed(1);
    if (data.macd) indicators[1].textContent = data.macd;
    if (data.stochastic) indicators[2].textContent = data.stochastic.toFixed(1);
    if (data.movingAvg) indicators[3].textContent = `$${data.movingAvg.toFixed(2)}`;
}

/**
 * Format large numbers with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Smooth scroll to section
 */
function smoothScrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Export analysis data as JSON
 */
function exportAnalysisData() {
    const analysis = {
        timestamp: new Date().toISOString(),
        prices: {
            current: '$2,450.75',
            dayHigh: '$2,465.30',
            dayLow: '$2,440.50',
            weekHigh: '$2,530.00',
            weekLow: '$2,150.00'
        },
        indicators: {
            rsi: 62.5,
            macd: 'Bullish',
            stochastic: 72.3,
            movingAvg50: '$2,405.20'
        },
        supportLevels: ['$2,420.00', '$2,380.00'],
        resistanceLevels: ['$2,480.00', '$2,530.00']
    };
    
    const dataStr = JSON.stringify(analysis, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gold-analysis-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Print analysis report
 */
function printAnalysis() {
    window.print();
}

// Example of updating data every 30 seconds (uncomment to use)
/*
setInterval(() => {
    // Fetch real-time data here
    // updatePrices(newData);
    // updateIndicators(newData);
}, 30000);
*/

console.log('Gold Technical Analysis Dashboard Loaded');

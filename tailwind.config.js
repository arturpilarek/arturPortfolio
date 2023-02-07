module.exports = {
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': "url('~/assets/images/forest-bg.webp')",
                'author-img': "url('~/assets/images/author.webp')"
                // 'author-img': "url('~/assets/images/author.webp')"
            }
        },
        colors: {
            'primary': '#1B1B1B',
            'secondary': '#242222',
            'tertiary': '#312C2C',
            'accent': '#E66614',
            'accent-hover': 'hsl(23, 84%, 58%)',
            'tagText': '#D3B2B2',
            'white': '#FFFFFF'
        },
        fontFamily: {
            'chronicleDisplay': ['Chronicle Display', 'serif'],
            'whitneyMedium': ['Whitney Medium', 'sans-serif'],
            'whitneyBold': ['Whitney Bold', 'sans-serif']
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
            '8': '8px',
        }
    }
}
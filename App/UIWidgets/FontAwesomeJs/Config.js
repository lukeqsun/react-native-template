import fontawesome from '@fortawesome/fontawesome';

import brands from '@fortawesome/fontawesome-free-brands';
import light from '@fortawesome/fontawesome-free';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';

export const configureFontAwesomePro = (prefixType = 'regular') => {
    fontawesome.config = {
        familyPrefix: prefixTypes[prefixType]
    };

    fontawesome.library.add(brands, light, regular, solid);
};

export const prefixTypes = {
    regular: 'far',
    light: 'fal',
    solid: 'fas',
    brands: 'fab'
};

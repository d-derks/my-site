import faker from 'faker';
import { sample } from 'lodash';

const lorem = {
    image: (width = 640, height = 360, search = null) => {
        const defaultSearch = sample([
            'lorem-ipsum-image',
        ]);

        return `https://source.unsplash.com/random/${width}x${height}/?${search || defaultSearch}`;
    },
    ...faker.lorem,
};

export default lorem;

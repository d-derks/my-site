import React from 'react';
import classNames from 'classnames';
import s from './mediabox.module.scss';
import PropTypes from 'prop-types';

const Mediabox = ({img, alt, ratio = '2-1'}) => {

    const blockClass = classNames(s.host, {
        [s.isRatio_16_7]: ratio === '16-7',
        [s.isRatio_1_1]: ratio === '1-1',
        [s.isRatio_2_1]: ratio === '2-1',
    });

    return (
        <div className={blockClass}>
            <img
                className={s.media}
                src={img}
                alt={alt}
            />
        </div>
    );
};

export default Mediabox;

Mediabox.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    ratio: PropTypes.oneOf(['16-7', '1-1', '2-1']),

};

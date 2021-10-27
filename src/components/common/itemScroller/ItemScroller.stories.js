import React from 'react';
import ItemScroller from "./ItemScroller";
import {times} from "lodash";
import Mediabox from "../mediabox/Mediabox";
import lorem from "../../../utils/Lorem";


export default {
    component: ItemScroller,
    title: 'Components/Common/ItemScroller',
};

export const Default = () => {

    return (
        <ItemScroller>
            {
                times(6, (index) => (
                    <Mediabox
                        key={index}
                        img={lorem.image(1180, 500)}
                        ratio='16-7'
                        alt=''
                    />
                ))
            }
        </ItemScroller>
    );
};


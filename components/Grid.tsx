import React from 'react'
import { BentoGrid ,BentoGridItem} from './ui/BentoGrid'
import { GridItems } from '@/data'

const Grid = () => {
    return (
        <section>
            <BentoGrid>
                {GridItems.map((item,i) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        //img={item.img}
                    />
                )
            )}
            </BentoGrid>
        </section>
    )
}

export default Grid

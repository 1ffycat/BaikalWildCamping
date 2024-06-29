import { Fragment, useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";

export default function PlaceCollection({ places: places }) {

    return (
        <div className='min-w-[35rem] bg-gray-100 rounded-3xl p-6 flex flex-col gap-3 max-h-[98vh] overflow-scroll'>
            {places.map(place => (
                <Fragment key={place.id}>
                    <PlaceCard addedAt={place.addedAt} longitude={place.longitude} latitude={place.latitude} addedBy={place.author} imageUrl='https://baikal-1.ru/wp-content/uploads/2022/08/22-08-12-bbt1-5.jpeg' isVerified={place.verified} tags={place.tags} highlighted={place.highlighted} />
                </Fragment>
            ))}
        </div>
    )
}
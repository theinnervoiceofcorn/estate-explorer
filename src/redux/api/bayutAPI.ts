import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidAPIKey = "3abf4f1dfemsha84f24fc9d1543bp1c02c5jsn2c7c2efcfe55";

const baseQueryWithHeaders = fetchBaseQuery({
  baseUrl: "https://bayut.p.rapidapi.com",
  prepareHeaders: (headers) => {
    headers.set("X-RapidAPI-Key", rapidAPIKey);
    headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
    return headers;
  },
});

export const bayutAPI = createApi({
  reducerPath: "bayutApi",
  baseQuery: baseQueryWithHeaders,
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: ({
        locationExternalIDs,
        purpose,
        hitsPerPage,
        page,
        sort,
        rentFrequency,
        categoryExternalID,
        priceMin,
        priceMax,
        areaMin,
        areaMax,
        roomsMin,
        roomsMax,
        bathsMin,
        bathsMax,
        furnishingStatus,
        hasVideo,
        hasFloorPlan,
        hasPanorama,
      }) => {
        const queryParams = [
          `locationExternalIDs=${locationExternalIDs}`,
          purpose ? `purpose=${purpose}` : null,
          hitsPerPage ? `hitsPerPage=${hitsPerPage}` : null,
          page ? `page=${page}` : null,
          sort ? `sort=${sort}` : null,
          rentFrequency ? `rentFrequency=${rentFrequency}` : null,
          categoryExternalID ? `categoryExternalID=${categoryExternalID}` : null,
          priceMin ? `priceMin=${priceMin}` : null,
          priceMax ? `priceMax=${priceMax}` : null,
          areaMin ? `areaMin=${areaMin}` : null,
          areaMax ? `areaMax=${areaMax}` : null,
          roomsMin ? `roomsMin=${roomsMin}` : null,
          roomsMax ? `roomsMax=${roomsMax}` : null,
          bathsMin ? `bathsMin=${bathsMin}` : null,
          bathsMax ? `bathsMax=${bathsMax}` : null,
          furnishingStatus ? `furnishingStatus=${furnishingStatus}` : null,
          hasVideo ? `hasVideo=${hasVideo}` : null,
          hasFloorPlan ? `hasFloorPlan=${hasFloorPlan}` : null,
          hasPanorama ? `hasPanorama=${hasPanorama}` : null,
        ]
          .filter((param) => param !== null)
          .join("&");

        return `/properties/list?${queryParams}`;
      },
    }),
    getPropertyDetails: builder.query({
      query: ({ externalID }) => `properties/detail?externalID=${externalID}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyDetailsQuery } = bayutAPI;

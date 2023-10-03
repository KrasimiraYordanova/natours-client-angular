export interface ITour {
    
        name: string,
        description: string,
        duration: number,
        summary: string,
        difficulty: ["easy", "medium", "difficult"],
        price: number,
        priceDiscount: number,
        maxGroupSize: number,
        _ownerId: string,
        imageCover: string,
        images: string[],
        createdAt: string,
        startDates: string[],

        // startLocation: {
        //   // GeoJSON
        //   type: {
        //     type: String,
        //     default: "Point",
        //     enum: ["Point"]
        //   },
        //   coordinates: [Number],
        //   address: String,
        //   description: String
        // },
        // locations: [
        //   {
        //     type: {
        //       type: String,
        //       default: "Point",
        //       enum: ["Point"]
        //     },
        //     coordinates: [Number],
        //     address: String,
        //     description: String,
        //     day: Number
        //   }
        // ],
        
        guides: string[]
}
import mongoose from "mongoose";

const CostSchema = new mongoose.Schema({
  slug: String,
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],

  costData: {
    mapBanner: {
      image: String,
      altText: String,
    },
    marqueeAccordion: {
      marqueeText: String,
      heading: String,
      description: String,
      accordionItems: [
        {
          title: String,
          content: mongoose.Schema.Types.Mixed, // content can be string or object
        },
      ],
    },
    factors: [
      {
        icon: String,
        title: String,
        description: String,
      },
    ],
    cost: {
      fue: {
        description: String,
        pricingTable: [
          {
            level: String,
            grafts: String,
            cost: String,
          },
        ],
      },
      savaFue: {
        description: String,
        pricingTable: [
          {
            level: String,
            grafts: String,
            cost: String,
          },
        ],
      },
      qht: {
        description: String,
        pricingTable: [
          {
            level: String,
            grafts: String,
            cost: String,
          },
        ],
      },
    },
    qhtVsDelhiMumbai: {
      heading: String,
      description: String,
      comparisonTable: [
        {
          metric: String,
          qht: String,
          delhi: String,
          mumbai: String,
        },
      ],
    },
    costComparison: {
      heading: String,
      description: String,
      comparisonTable: [
        {
          level: String,
          grafts: String,
          qht: String,
          fue: String,
          dhi: String,
        },
      ],
    },
    solutions: [
      {
        title: String,
        icon: String,
      },
    ],
    exploreLocations: {
      cities: {
        heading: String,
        description: String,
        list: [
          {
            name: String,
            link: String,
          },
        ],
      },
      countries: {
        heading: String,
        description: String,
        list: [
          {
            name: String,
            link: String,
          },
        ],
      },
    },
  },
});

export default mongoose.models.Cost || mongoose.model("Cost", CostSchema);

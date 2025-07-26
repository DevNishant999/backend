import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    slug: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: [String],

    banner: {
      images: [
        {
          src: String,
          alt: String,
        },
      ],
    },

    description: {
      title: String,
      subtitle: String,
      paragraphs: [String],
      image: String,
    },

    hairTransplantInIndia: {
      title: String,
      paragraphs: [String],
      image: String,
    },

    idealCandidate: {
      title: String,
      subtitle: String,
      criteria: [
        {
          title: String,
          description: String,
        },
      ],
      confusedSection: {
        title: String,
        subtitle: String,
        buttonText: String,
      },
      image: String,
    },

    typesOfHairTransplant: {
      title: String,
      subtitle: String,
      types: [
        {
          title: String,
          description: String,
          image: String,
          features: [String],
          buttonText: String,
        },
      ],
    },

    benefits: {
      title: String,
      subtitle: String,
      items: [
        {
          icon: String,
          title: String,
          description: String,
        },
      ],
    },

    procedure: {
      title: String,
      description: String,
      stats: [
        {
          value: String,
          icon: String,
          label: String,
        },
      ],
      steps: [
        {
          title: String,
          description: String,
          number: String,
        },
      ],
      beforeAfterImage: String,
      buttonText: String,
    },

    preProcedureTips: {
      title: String,
      subtitle: String,
      tips: [
        {
          icon: String,
          title: String,
          description: String,
        },
      ],
    },

    cost: {
      title: String,
      description: String,
      costTable: {
        headers: [String],
        rows: [
          {
            type: String,
            cost: String,
          },
        ],
      },
      factors: {
        title: String,
        description: String,
        items: [
          {
            icon: String,
            title: String,
            description: String,
          },
        ],
      },
    },

    whyChooseUs: {
      title: String,
      subtitle: String,
      items: [
        {
          title: String,
          description: String,
          bg: String,
          specialBox: {
            image: String,
            title: String,
            subtitle: String,
            buttonText: String,
          },
        },
      ],
    },

    postSurgerySupport: {
      title: String,
      description: String,
      image: String,
      items: [
        {
          title: String,
          description: String,
        },
      ],
    },

    dosAndDonts: {
      title: String,
      subtitle: String,
      dos: [
        {
          title: String,
        },
      ],
      donts: [
        {
          title: String,
        },
      ],
    },

    recovery: {
      title: String,
      subtitle: String,
      weeks: [
        {
          name: String,
          expectations: [String],
          careInstructions: [String],
          image: String,
        },
      ],
    },

    comparison: {
      title: String,
      subtitle: String,
      columns: [
        {
          title: String,
          items: [String],
        },
      ],
    },

    insights: {
      title: String,
      items: [
        {
          image: String,
          title: String,
        },
      ],
    },

    locations: {
      title: String,
      cities: [
        {
          name: String,
          image: String,
        },
      ],
    },

    causesOfHairLoss: {
      title: String,
      subtitle: String,
      causes: [
        {
          title: String,
          description: String,
          icon: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);

export default Service;

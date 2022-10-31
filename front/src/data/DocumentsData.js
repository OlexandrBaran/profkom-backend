import DocumentsItem from "../pages/Documents/DocumentsItem";

export const regulationsDocs = [
    {
        id:1,
        title:'docs_unsversity_statute',
        link:"https://www.uzhnu.edu.ua/en/infocentre/get/9268"
    },
    {
        id:2,
        title:'docs_agreement',
        link:""
    },

    {
        id:3,
        title:'docs_regulation_about_stud_gov',
        link:"https://www.uzhnu.edu.ua/uk/infocentre/get/7589"
    }
]

export const tradeUnionDocs = [
    {
        id:1,
        title:'docs_ua_law_about_TU',
        link:"https://zakon.rada.gov.ua/laws/show/1045-14#Text"
    },
    {
        id:2,
        title:'docs_trade_union_statute',
        link:"https://pon.org.ua/statut/"
    }
]

export const samplesStatemans = [
    {
        id:1,
        title:'sample_statement_disabled',
        link:"https://profkom-bucket.s3.amazonaws.com/%D0%B7%D1%80%D0%B0%D0%B7%D0%BE%D0%BA-%D0%B7%D0%B0%D1%8F%D0%B2%D0%B8-%D1%96%D0%BD%D0%B2%D0%B0%D0%BB%D1%96%D0%B4%D0%B8+(1).pdf"
    },
    {
        id:2,
        title:'sample_statement_orphan_full',
        link:"https://profkom-bucket.s3.amazonaws.com/%D0%B7%D1%80%D0%B0%D0%B7%D0%BE%D0%BA-%D0%B7%D0%B0%D1%8F%D0%B2%D0%B0-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%B2%D0%BD%D0%B5.pdf"
    },

    {
        id:3,
        title:'sample_statement_orphan_partial',
        link:"https://profkom-bucket.s3.amazonaws.com/%D0%B7%D1%80%D0%B0%D0%B7%D0%BE%D0%BA-%D0%B7%D0%B0%D1%8F%D0%B2%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%BF%D0%BE%D0%B2%D0%BD%D0%B5.pdf"
    }
]

export const documentsData = [
    {
        id:1,
        title:'docs_regulation',
        content:<DocumentsItem data={regulationsDocs}/>
    },

    {
        id:2,
        title:'docs_tradeUnion',
        content:<DocumentsItem data={tradeUnionDocs}/>
    },

    {
        id:3,
        title:'docs_samples_statemans',
        content:<DocumentsItem data={samplesStatemans}/>
    }
]

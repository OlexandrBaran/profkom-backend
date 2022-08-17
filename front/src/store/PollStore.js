import {action, makeObservable, observable} from "mobx";

export default class PollStore {
 


    constructor() {
        this.polls = [
            {
                id: 1, 
                questionUA:"Дfkdlfkdlfkdlfkdlfkdlfkdlfkdlkfldkfdlfkldkfіана", 
                questionEN: 'Чалбfdfkdlfkdlfkdlkfldkfldkfldkfldkfldkfащ', 
                department:'mfmfmfmfmfmffmfmfm',
                descriptionEN:'lde,,,,,,,,,w,ldewledfmewemlefmelfefnelsfsldflsdfmlsdfnsldnfslnfsldnfslnfsldnfs;dofne;vnd;vkndf;vkjndf;fvsd;zcnsd;gvnd;xkjvdf;vkjn',
                descriptionUA:'dslfmsdofkkjdfhlifjbcslfaerfliusduddjdanlxffibuhsd;ichae;fhd;vsakfgskadbasfgdikjfdbajvgeskdjbcldfzigfbsijvbr;fcjbdx;djbassldibjgfd;sovihaefdc;sdofbnsdvbeldjvbsdkjbcsfknsd;vbd;',
                status:'ACTIVE',
                options:['fmkfmsdlkfmslfnsl', 'fwfnlsdkdnf;eofkvnfcokfmselcjsdf', 'fwmekfnmsdodlfiweofvjdfofkszmcop'],
                votes:[5, 6, 19],
                votedUsersId:[5, 6, 2]
            },

            {
                id: 2, 
                questionUA:"Дfkdlfkdlfkdlfkdlfkdlfkdlfkdlkfldkfdlfkldkfіана", 
                questionEN: 'Чалбfdfkdlfkdlfkdlkfldkfldkfldkfldkfldkfащ', 
                department:'mfmfmfmfmfmffmfmfm',
                descriptionEN:'lde,,,,,,,,,w,ldewledfmewemlefmelfefnelsfsldflsdfmlsdfnsldnfslnfsldnfslnfsldnfs;dofne;vnd;vkndf;vkjndf;fvsd;zcnsd;gvnd;xkjvdf;vkjn',
                descriptionUA:'dslfmsdofkkjdfhlifjbcslfaerfliusduddjdanlxffibuhsd;ichae;fhd;vsakfgskadbasfgdikjfdbajvgeskdjbcldfzigfbsijvbr;fcjbdx;djbassldibjgfd;sovihaefdc;sdofbnsdvbeldjvbsdkjbcsfknsd;vbd;',
                status:'ACTIVE',
                options:['fmkfmsdlkfmslfnsl', 'fwfnlsdkdnf;eofkvnfcokfmselcjsdf', 'fwmekfnmsdodlfiweofvjdfofkszmcop'],
                votes:[5, 6, 19],
                votedUsersId:[5, 6, 2]
            },

            {
                id: 3, 
                questionUA:"Дfkdlfkdlfkdlfkdlfkdlfkdlfkdlkfldkfdlfkldkfіана", 
                questionEN: 'Чалбfdfkdlfkdlfkdlkfldkfldkfldkfldkfldkfащ', 
                department:'mfmfmfmfmfmffmfmfm',
                descriptionEN:'lde,,,,,,,,,w,ldewledfmewemlefmelfefnelsfsldflsdfmlsdfnsldnfslnfsldnfslnfsldnfs;dofne;vnd;vkndf;vkjndf;fvsd;zcnsd;gvnd;xkjvdf;vkjn',
                descriptionUA:'dslfmsdofkkjdfhlifjbcslfaerfliusduddjdanlxffibuhsd;ichae;fhd;vsakfgskadbasfgdikjfdbajvgeskdjbcldfzigfbsijvbr;fcjbdx;djbassldibjgfd;sovihaefdc;sdofbnsdvbeldjvbsdkjbcsfknsd;vbd;',
                status:'ACTIVE',
                options:['fmkfmsdlkfmslfnsl', 'fwfnlsdkdnf;eofkvnfcokfmselcjsdf', 'fwmekfnmsdodlfiweofvjdfofkszmcop'],
                votes:[5, 6, 19],
                votedUsersId:[5, 6, 2]
            },

            {
                id: 4, 
                questionUA:"Дfkdlfkdlfkdlfkdlfkdlfkdlfkdlkfldkfdlfkldkfіана", 
                questionEN: 'Чалбfdfkdlfkdlfkdlkfldkfldkfldkfldkfldkfащ', 
                department:'mfmfmfmfmfmffmfmfm',
                descriptionEN:'lde,,,,,,,,,w,ldewledfmewemlefmelfefnelsfsldflsdfmlsdfnsldnfslnfsldnfslnfsldnfs;dofne;vnd;vkndf;vkjndf;fvsd;zcnsd;gvnd;xkjvdf;vkjn',
                descriptionUA:'dslfmsdofkkjdfhlifjbcslfaerfliusduddjdanlxffibuhsd;ichae;fhd;vsakfgskadbasfgdikjfdbajvgeskdjbcldfzigfbsijvbr;fcjbdx;djbassldibjgfd;sovihaefdc;sdofbnsdvbeldjvbsdkjbcsfknsd;vbd;',
                status:'ACTIVE',
                options:['fmkfmsdlkfmslfnsl', 'fwfnlsdkdnf;eofkvnfcokfmselcjsdf', 'fwmekfnmsdodlfiweofvjdfofkszmcop'],
                votes:[5, 6, 19],
                votedUsersId:[5, 6, 2]
            },

            {
                id: 5, 
                questionUA:"Дfkdlfkdlfkdlfkdlfkdlfkdlfkdlkfldkfdlfkldkfіана", 
                questionEN: 'Чалбfdfkdlfkdlfkdlkfldkfldkfldkfldkfldkfащ', 
                department:'mfmfmfmfmfmffmfmfm',
                descriptionEN:'lde,,,,,,,,,w,ldewledfmewemlefmelfefnelsfsldflsdfmlsdfnsldnfslnfsldnfslnfsldnfs;dofne;vnd;vkndf;vkjndf;fvsd;zcnsd;gvnd;xkjvdf;vkjn',
                descriptionUA:'dslfmsdofkkjdfhlifjbcslfaerfliusduddjdanlxffibuhsd;ichae;fhd;vsakfgskadbasfgdikjfdbajvgeskdjbcldfzigfbsijvbr;fcjbdx;djbassldibjgfd;sovihaefdc;sdofbnsdvbeldjvbsdkjbcsfknsd;vbd;',
                status:'ACTIVE',
                options:['fmkfmsdlkfmslfnsl', 'fwfnlsdkdnf;eofkvnfcokfmselcjsdf', 'fwmekfnmsdodlfiweofvjdfofkszmcop'],
                votes:[5, 6, 19],
                votedUsersId:[5, 6, 2]
            }
        ]
        
        makeObservable(this , {
            polls:observable,
            setPolls:action
        })
      
    }

    setPolls(polls) {
        this.polls = polls;
    }
}
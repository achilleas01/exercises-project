export interface AppealSub {
    transId: number;
    transDate: string;
    submissionState: string;
    submissionStatus: string;
    refNo: number;
    etosRefNo: number;
    dedArApofasis: number;
    dedConclusionDate: string;
    anastoli: boolean;
    anastoliTransId?: number;
    anastoliTransDate?: string;
    anastoliSubmissionState?: string;
    anastoliSubmissionStatus?: string;
    anastoliRefNo?: number;
    anastoliEtosRefNo?: number;
    anastoliDedArApofasis?: number;
    anastoliDedConclusionDate?: string;
}
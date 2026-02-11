export declare const Role: {
    readonly OWNER: "OWNER";
    readonly CUSTOMER: "CUSTOMER";
    readonly MASTER: "MASTER";
};
export type Role = (typeof Role)[keyof typeof Role];

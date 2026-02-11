import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MasterServiceModel = runtime.Types.Result.DefaultSelection<Prisma.$MasterServicePayload>;
export type AggregateMasterService = {
    _count: MasterServiceCountAggregateOutputType | null;
    _min: MasterServiceMinAggregateOutputType | null;
    _max: MasterServiceMaxAggregateOutputType | null;
};
export type MasterServiceMinAggregateOutputType = {
    id: string | null;
    masterId: string | null;
    serviceId: string | null;
    createdAt: Date | null;
};
export type MasterServiceMaxAggregateOutputType = {
    id: string | null;
    masterId: string | null;
    serviceId: string | null;
    createdAt: Date | null;
};
export type MasterServiceCountAggregateOutputType = {
    id: number;
    masterId: number;
    serviceId: number;
    createdAt: number;
    _all: number;
};
export type MasterServiceMinAggregateInputType = {
    id?: true;
    masterId?: true;
    serviceId?: true;
    createdAt?: true;
};
export type MasterServiceMaxAggregateInputType = {
    id?: true;
    masterId?: true;
    serviceId?: true;
    createdAt?: true;
};
export type MasterServiceCountAggregateInputType = {
    id?: true;
    masterId?: true;
    serviceId?: true;
    createdAt?: true;
    _all?: true;
};
export type MasterServiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterServiceWhereInput;
    orderBy?: Prisma.MasterServiceOrderByWithRelationInput | Prisma.MasterServiceOrderByWithRelationInput[];
    cursor?: Prisma.MasterServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MasterServiceCountAggregateInputType;
    _min?: MasterServiceMinAggregateInputType;
    _max?: MasterServiceMaxAggregateInputType;
};
export type GetMasterServiceAggregateType<T extends MasterServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateMasterService]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMasterService[P]> : Prisma.GetScalarType<T[P], AggregateMasterService[P]>;
};
export type MasterServiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterServiceWhereInput;
    orderBy?: Prisma.MasterServiceOrderByWithAggregationInput | Prisma.MasterServiceOrderByWithAggregationInput[];
    by: Prisma.MasterServiceScalarFieldEnum[] | Prisma.MasterServiceScalarFieldEnum;
    having?: Prisma.MasterServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MasterServiceCountAggregateInputType | true;
    _min?: MasterServiceMinAggregateInputType;
    _max?: MasterServiceMaxAggregateInputType;
};
export type MasterServiceGroupByOutputType = {
    id: string;
    masterId: string;
    serviceId: string;
    createdAt: Date;
    _count: MasterServiceCountAggregateOutputType | null;
    _min: MasterServiceMinAggregateOutputType | null;
    _max: MasterServiceMaxAggregateOutputType | null;
};
type GetMasterServiceGroupByPayload<T extends MasterServiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MasterServiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MasterServiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MasterServiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MasterServiceGroupByOutputType[P]>;
}>>;
export type MasterServiceWhereInput = {
    AND?: Prisma.MasterServiceWhereInput | Prisma.MasterServiceWhereInput[];
    OR?: Prisma.MasterServiceWhereInput[];
    NOT?: Prisma.MasterServiceWhereInput | Prisma.MasterServiceWhereInput[];
    id?: Prisma.StringFilter<"MasterService"> | string;
    masterId?: Prisma.StringFilter<"MasterService"> | string;
    serviceId?: Prisma.StringFilter<"MasterService"> | string;
    createdAt?: Prisma.DateTimeFilter<"MasterService"> | Date | string;
    master?: Prisma.XOR<Prisma.MasterScalarRelationFilter, Prisma.MasterWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
};
export type MasterServiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    master?: Prisma.MasterOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
};
export type MasterServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    masterId_serviceId?: Prisma.MasterServiceMasterIdServiceIdCompoundUniqueInput;
    AND?: Prisma.MasterServiceWhereInput | Prisma.MasterServiceWhereInput[];
    OR?: Prisma.MasterServiceWhereInput[];
    NOT?: Prisma.MasterServiceWhereInput | Prisma.MasterServiceWhereInput[];
    masterId?: Prisma.StringFilter<"MasterService"> | string;
    serviceId?: Prisma.StringFilter<"MasterService"> | string;
    createdAt?: Prisma.DateTimeFilter<"MasterService"> | Date | string;
    master?: Prisma.XOR<Prisma.MasterScalarRelationFilter, Prisma.MasterWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
}, "id" | "masterId_serviceId">;
export type MasterServiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MasterServiceCountOrderByAggregateInput;
    _max?: Prisma.MasterServiceMaxOrderByAggregateInput;
    _min?: Prisma.MasterServiceMinOrderByAggregateInput;
};
export type MasterServiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.MasterServiceScalarWhereWithAggregatesInput | Prisma.MasterServiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.MasterServiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MasterServiceScalarWhereWithAggregatesInput | Prisma.MasterServiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MasterService"> | string;
    masterId?: Prisma.StringWithAggregatesFilter<"MasterService"> | string;
    serviceId?: Prisma.StringWithAggregatesFilter<"MasterService"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MasterService"> | Date | string;
};
export type MasterServiceCreateInput = {
    id?: string;
    createdAt?: Date | string;
    master: Prisma.MasterCreateNestedOneWithoutMasterServicesInput;
    service: Prisma.ServiceCreateNestedOneWithoutMasterServicesInput;
};
export type MasterServiceUncheckedCreateInput = {
    id?: string;
    masterId: string;
    serviceId: string;
    createdAt?: Date | string;
};
export type MasterServiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    master?: Prisma.MasterUpdateOneRequiredWithoutMasterServicesNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutMasterServicesNestedInput;
};
export type MasterServiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceCreateManyInput = {
    id?: string;
    masterId: string;
    serviceId: string;
    createdAt?: Date | string;
};
export type MasterServiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceListRelationFilter = {
    every?: Prisma.MasterServiceWhereInput;
    some?: Prisma.MasterServiceWhereInput;
    none?: Prisma.MasterServiceWhereInput;
};
export type MasterServiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MasterServiceMasterIdServiceIdCompoundUniqueInput = {
    masterId: string;
    serviceId: string;
};
export type MasterServiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MasterServiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MasterServiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MasterServiceCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput> | Prisma.MasterServiceCreateWithoutServiceInput[] | Prisma.MasterServiceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutServiceInput | Prisma.MasterServiceCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.MasterServiceCreateManyServiceInputEnvelope;
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
};
export type MasterServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput> | Prisma.MasterServiceCreateWithoutServiceInput[] | Prisma.MasterServiceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutServiceInput | Prisma.MasterServiceCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.MasterServiceCreateManyServiceInputEnvelope;
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
};
export type MasterServiceUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput> | Prisma.MasterServiceCreateWithoutServiceInput[] | Prisma.MasterServiceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutServiceInput | Prisma.MasterServiceCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.MasterServiceUpsertWithWhereUniqueWithoutServiceInput | Prisma.MasterServiceUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.MasterServiceCreateManyServiceInputEnvelope;
    set?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    disconnect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    delete?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    update?: Prisma.MasterServiceUpdateWithWhereUniqueWithoutServiceInput | Prisma.MasterServiceUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.MasterServiceUpdateManyWithWhereWithoutServiceInput | Prisma.MasterServiceUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
};
export type MasterServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput> | Prisma.MasterServiceCreateWithoutServiceInput[] | Prisma.MasterServiceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutServiceInput | Prisma.MasterServiceCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.MasterServiceUpsertWithWhereUniqueWithoutServiceInput | Prisma.MasterServiceUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.MasterServiceCreateManyServiceInputEnvelope;
    set?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    disconnect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    delete?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    update?: Prisma.MasterServiceUpdateWithWhereUniqueWithoutServiceInput | Prisma.MasterServiceUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.MasterServiceUpdateManyWithWhereWithoutServiceInput | Prisma.MasterServiceUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
};
export type MasterServiceCreateNestedManyWithoutMasterInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput> | Prisma.MasterServiceCreateWithoutMasterInput[] | Prisma.MasterServiceUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutMasterInput | Prisma.MasterServiceCreateOrConnectWithoutMasterInput[];
    createMany?: Prisma.MasterServiceCreateManyMasterInputEnvelope;
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
};
export type MasterServiceUncheckedCreateNestedManyWithoutMasterInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput> | Prisma.MasterServiceCreateWithoutMasterInput[] | Prisma.MasterServiceUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutMasterInput | Prisma.MasterServiceCreateOrConnectWithoutMasterInput[];
    createMany?: Prisma.MasterServiceCreateManyMasterInputEnvelope;
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
};
export type MasterServiceUpdateManyWithoutMasterNestedInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput> | Prisma.MasterServiceCreateWithoutMasterInput[] | Prisma.MasterServiceUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutMasterInput | Prisma.MasterServiceCreateOrConnectWithoutMasterInput[];
    upsert?: Prisma.MasterServiceUpsertWithWhereUniqueWithoutMasterInput | Prisma.MasterServiceUpsertWithWhereUniqueWithoutMasterInput[];
    createMany?: Prisma.MasterServiceCreateManyMasterInputEnvelope;
    set?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    disconnect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    delete?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    update?: Prisma.MasterServiceUpdateWithWhereUniqueWithoutMasterInput | Prisma.MasterServiceUpdateWithWhereUniqueWithoutMasterInput[];
    updateMany?: Prisma.MasterServiceUpdateManyWithWhereWithoutMasterInput | Prisma.MasterServiceUpdateManyWithWhereWithoutMasterInput[];
    deleteMany?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
};
export type MasterServiceUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput> | Prisma.MasterServiceCreateWithoutMasterInput[] | Prisma.MasterServiceUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.MasterServiceCreateOrConnectWithoutMasterInput | Prisma.MasterServiceCreateOrConnectWithoutMasterInput[];
    upsert?: Prisma.MasterServiceUpsertWithWhereUniqueWithoutMasterInput | Prisma.MasterServiceUpsertWithWhereUniqueWithoutMasterInput[];
    createMany?: Prisma.MasterServiceCreateManyMasterInputEnvelope;
    set?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    disconnect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    delete?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    connect?: Prisma.MasterServiceWhereUniqueInput | Prisma.MasterServiceWhereUniqueInput[];
    update?: Prisma.MasterServiceUpdateWithWhereUniqueWithoutMasterInput | Prisma.MasterServiceUpdateWithWhereUniqueWithoutMasterInput[];
    updateMany?: Prisma.MasterServiceUpdateManyWithWhereWithoutMasterInput | Prisma.MasterServiceUpdateManyWithWhereWithoutMasterInput[];
    deleteMany?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type MasterServiceCreateWithoutServiceInput = {
    id?: string;
    createdAt?: Date | string;
    master: Prisma.MasterCreateNestedOneWithoutMasterServicesInput;
};
export type MasterServiceUncheckedCreateWithoutServiceInput = {
    id?: string;
    masterId: string;
    createdAt?: Date | string;
};
export type MasterServiceCreateOrConnectWithoutServiceInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput>;
};
export type MasterServiceCreateManyServiceInputEnvelope = {
    data: Prisma.MasterServiceCreateManyServiceInput | Prisma.MasterServiceCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type MasterServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MasterServiceUpdateWithoutServiceInput, Prisma.MasterServiceUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.MasterServiceCreateWithoutServiceInput, Prisma.MasterServiceUncheckedCreateWithoutServiceInput>;
};
export type MasterServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MasterServiceUpdateWithoutServiceInput, Prisma.MasterServiceUncheckedUpdateWithoutServiceInput>;
};
export type MasterServiceUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.MasterServiceScalarWhereInput;
    data: Prisma.XOR<Prisma.MasterServiceUpdateManyMutationInput, Prisma.MasterServiceUncheckedUpdateManyWithoutServiceInput>;
};
export type MasterServiceScalarWhereInput = {
    AND?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
    OR?: Prisma.MasterServiceScalarWhereInput[];
    NOT?: Prisma.MasterServiceScalarWhereInput | Prisma.MasterServiceScalarWhereInput[];
    id?: Prisma.StringFilter<"MasterService"> | string;
    masterId?: Prisma.StringFilter<"MasterService"> | string;
    serviceId?: Prisma.StringFilter<"MasterService"> | string;
    createdAt?: Prisma.DateTimeFilter<"MasterService"> | Date | string;
};
export type MasterServiceCreateWithoutMasterInput = {
    id?: string;
    createdAt?: Date | string;
    service: Prisma.ServiceCreateNestedOneWithoutMasterServicesInput;
};
export type MasterServiceUncheckedCreateWithoutMasterInput = {
    id?: string;
    serviceId: string;
    createdAt?: Date | string;
};
export type MasterServiceCreateOrConnectWithoutMasterInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput>;
};
export type MasterServiceCreateManyMasterInputEnvelope = {
    data: Prisma.MasterServiceCreateManyMasterInput | Prisma.MasterServiceCreateManyMasterInput[];
    skipDuplicates?: boolean;
};
export type MasterServiceUpsertWithWhereUniqueWithoutMasterInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MasterServiceUpdateWithoutMasterInput, Prisma.MasterServiceUncheckedUpdateWithoutMasterInput>;
    create: Prisma.XOR<Prisma.MasterServiceCreateWithoutMasterInput, Prisma.MasterServiceUncheckedCreateWithoutMasterInput>;
};
export type MasterServiceUpdateWithWhereUniqueWithoutMasterInput = {
    where: Prisma.MasterServiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MasterServiceUpdateWithoutMasterInput, Prisma.MasterServiceUncheckedUpdateWithoutMasterInput>;
};
export type MasterServiceUpdateManyWithWhereWithoutMasterInput = {
    where: Prisma.MasterServiceScalarWhereInput;
    data: Prisma.XOR<Prisma.MasterServiceUpdateManyMutationInput, Prisma.MasterServiceUncheckedUpdateManyWithoutMasterInput>;
};
export type MasterServiceCreateManyServiceInput = {
    id?: string;
    masterId: string;
    createdAt?: Date | string;
};
export type MasterServiceUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    master?: Prisma.MasterUpdateOneRequiredWithoutMasterServicesNestedInput;
};
export type MasterServiceUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceCreateManyMasterInput = {
    id?: string;
    serviceId: string;
    createdAt?: Date | string;
};
export type MasterServiceUpdateWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUpdateOneRequiredWithoutMasterServicesNestedInput;
};
export type MasterServiceUncheckedUpdateWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceUncheckedUpdateManyWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MasterServiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    masterId?: boolean;
    serviceId?: boolean;
    createdAt?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["masterService"]>;
export type MasterServiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    masterId?: boolean;
    serviceId?: boolean;
    createdAt?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["masterService"]>;
export type MasterServiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    masterId?: boolean;
    serviceId?: boolean;
    createdAt?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["masterService"]>;
export type MasterServiceSelectScalar = {
    id?: boolean;
    masterId?: boolean;
    serviceId?: boolean;
    createdAt?: boolean;
};
export type MasterServiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "masterId" | "serviceId" | "createdAt", ExtArgs["result"]["masterService"]>;
export type MasterServiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type MasterServiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type MasterServiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type $MasterServicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MasterService";
    objects: {
        master: Prisma.$MasterPayload<ExtArgs>;
        service: Prisma.$ServicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        masterId: string;
        serviceId: string;
        createdAt: Date;
    }, ExtArgs["result"]["masterService"]>;
    composites: {};
};
export type MasterServiceGetPayload<S extends boolean | null | undefined | MasterServiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MasterServicePayload, S>;
export type MasterServiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MasterServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MasterServiceCountAggregateInputType | true;
};
export interface MasterServiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MasterService'];
        meta: {
            name: 'MasterService';
        };
    };
    findUnique<T extends MasterServiceFindUniqueArgs>(args: Prisma.SelectSubset<T, MasterServiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MasterServiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MasterServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MasterServiceFindFirstArgs>(args?: Prisma.SelectSubset<T, MasterServiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MasterServiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MasterServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MasterServiceFindManyArgs>(args?: Prisma.SelectSubset<T, MasterServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MasterServiceCreateArgs>(args: Prisma.SelectSubset<T, MasterServiceCreateArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MasterServiceCreateManyArgs>(args?: Prisma.SelectSubset<T, MasterServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MasterServiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MasterServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MasterServiceDeleteArgs>(args: Prisma.SelectSubset<T, MasterServiceDeleteArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MasterServiceUpdateArgs>(args: Prisma.SelectSubset<T, MasterServiceUpdateArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MasterServiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, MasterServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MasterServiceUpdateManyArgs>(args: Prisma.SelectSubset<T, MasterServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MasterServiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MasterServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MasterServiceUpsertArgs>(args: Prisma.SelectSubset<T, MasterServiceUpsertArgs<ExtArgs>>): Prisma.Prisma__MasterServiceClient<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MasterServiceCountArgs>(args?: Prisma.Subset<T, MasterServiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MasterServiceCountAggregateOutputType> : number>;
    aggregate<T extends MasterServiceAggregateArgs>(args: Prisma.Subset<T, MasterServiceAggregateArgs>): Prisma.PrismaPromise<GetMasterServiceAggregateType<T>>;
    groupBy<T extends MasterServiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MasterServiceGroupByArgs['orderBy'];
    } : {
        orderBy?: MasterServiceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MasterServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MasterServiceFieldRefs;
}
export interface Prisma__MasterServiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    master<T extends Prisma.MasterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MasterDefaultArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.ServiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceDefaultArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MasterServiceFieldRefs {
    readonly id: Prisma.FieldRef<"MasterService", 'String'>;
    readonly masterId: Prisma.FieldRef<"MasterService", 'String'>;
    readonly serviceId: Prisma.FieldRef<"MasterService", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MasterService", 'DateTime'>;
}
export type MasterServiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where: Prisma.MasterServiceWhereUniqueInput;
};
export type MasterServiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where: Prisma.MasterServiceWhereUniqueInput;
};
export type MasterServiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where?: Prisma.MasterServiceWhereInput;
    orderBy?: Prisma.MasterServiceOrderByWithRelationInput | Prisma.MasterServiceOrderByWithRelationInput[];
    cursor?: Prisma.MasterServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterServiceScalarFieldEnum | Prisma.MasterServiceScalarFieldEnum[];
};
export type MasterServiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where?: Prisma.MasterServiceWhereInput;
    orderBy?: Prisma.MasterServiceOrderByWithRelationInput | Prisma.MasterServiceOrderByWithRelationInput[];
    cursor?: Prisma.MasterServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterServiceScalarFieldEnum | Prisma.MasterServiceScalarFieldEnum[];
};
export type MasterServiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where?: Prisma.MasterServiceWhereInput;
    orderBy?: Prisma.MasterServiceOrderByWithRelationInput | Prisma.MasterServiceOrderByWithRelationInput[];
    cursor?: Prisma.MasterServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterServiceScalarFieldEnum | Prisma.MasterServiceScalarFieldEnum[];
};
export type MasterServiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterServiceCreateInput, Prisma.MasterServiceUncheckedCreateInput>;
};
export type MasterServiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MasterServiceCreateManyInput | Prisma.MasterServiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MasterServiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    data: Prisma.MasterServiceCreateManyInput | Prisma.MasterServiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MasterServiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MasterServiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterServiceUpdateInput, Prisma.MasterServiceUncheckedUpdateInput>;
    where: Prisma.MasterServiceWhereUniqueInput;
};
export type MasterServiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MasterServiceUpdateManyMutationInput, Prisma.MasterServiceUncheckedUpdateManyInput>;
    where?: Prisma.MasterServiceWhereInput;
    limit?: number;
};
export type MasterServiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterServiceUpdateManyMutationInput, Prisma.MasterServiceUncheckedUpdateManyInput>;
    where?: Prisma.MasterServiceWhereInput;
    limit?: number;
    include?: Prisma.MasterServiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MasterServiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where: Prisma.MasterServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterServiceCreateInput, Prisma.MasterServiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MasterServiceUpdateInput, Prisma.MasterServiceUncheckedUpdateInput>;
};
export type MasterServiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
    where: Prisma.MasterServiceWhereUniqueInput;
};
export type MasterServiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterServiceWhereInput;
    limit?: number;
};
export type MasterServiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterServiceSelect<ExtArgs> | null;
    omit?: Prisma.MasterServiceOmit<ExtArgs> | null;
    include?: Prisma.MasterServiceInclude<ExtArgs> | null;
};
export {};

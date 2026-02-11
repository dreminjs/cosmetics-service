import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MasterModel = runtime.Types.Result.DefaultSelection<Prisma.$MasterPayload>;
export type AggregateMaster = {
    _count: MasterCountAggregateOutputType | null;
    _min: MasterMinAggregateOutputType | null;
    _max: MasterMaxAggregateOutputType | null;
};
export type MasterMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    previewImage: string | null;
};
export type MasterMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    previewImage: string | null;
};
export type MasterCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    previewImage: number;
    _all: number;
};
export type MasterMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    previewImage?: true;
};
export type MasterMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    previewImage?: true;
};
export type MasterCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    previewImage?: true;
    _all?: true;
};
export type MasterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterWhereInput;
    orderBy?: Prisma.MasterOrderByWithRelationInput | Prisma.MasterOrderByWithRelationInput[];
    cursor?: Prisma.MasterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MasterCountAggregateInputType;
    _min?: MasterMinAggregateInputType;
    _max?: MasterMaxAggregateInputType;
};
export type GetMasterAggregateType<T extends MasterAggregateArgs> = {
    [P in keyof T & keyof AggregateMaster]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaster[P]> : Prisma.GetScalarType<T[P], AggregateMaster[P]>;
};
export type MasterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterWhereInput;
    orderBy?: Prisma.MasterOrderByWithAggregationInput | Prisma.MasterOrderByWithAggregationInput[];
    by: Prisma.MasterScalarFieldEnum[] | Prisma.MasterScalarFieldEnum;
    having?: Prisma.MasterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MasterCountAggregateInputType | true;
    _min?: MasterMinAggregateInputType;
    _max?: MasterMaxAggregateInputType;
};
export type MasterGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    previewImage: string;
    _count: MasterCountAggregateOutputType | null;
    _min: MasterMinAggregateOutputType | null;
    _max: MasterMaxAggregateOutputType | null;
};
type GetMasterGroupByPayload<T extends MasterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MasterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MasterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MasterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MasterGroupByOutputType[P]>;
}>>;
export type MasterWhereInput = {
    AND?: Prisma.MasterWhereInput | Prisma.MasterWhereInput[];
    OR?: Prisma.MasterWhereInput[];
    NOT?: Prisma.MasterWhereInput | Prisma.MasterWhereInput[];
    id?: Prisma.StringFilter<"Master"> | string;
    name?: Prisma.StringFilter<"Master"> | string;
    description?: Prisma.StringFilter<"Master"> | string;
    previewImage?: Prisma.StringFilter<"Master"> | string;
    timeSlots?: Prisma.TimeSlotListRelationFilter;
    booking?: Prisma.BookingListRelationFilter;
    masterServices?: Prisma.MasterServiceListRelationFilter;
};
export type MasterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    previewImage?: Prisma.SortOrder;
    timeSlots?: Prisma.TimeSlotOrderByRelationAggregateInput;
    booking?: Prisma.BookingOrderByRelationAggregateInput;
    masterServices?: Prisma.MasterServiceOrderByRelationAggregateInput;
};
export type MasterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MasterWhereInput | Prisma.MasterWhereInput[];
    OR?: Prisma.MasterWhereInput[];
    NOT?: Prisma.MasterWhereInput | Prisma.MasterWhereInput[];
    name?: Prisma.StringFilter<"Master"> | string;
    description?: Prisma.StringFilter<"Master"> | string;
    previewImage?: Prisma.StringFilter<"Master"> | string;
    timeSlots?: Prisma.TimeSlotListRelationFilter;
    booking?: Prisma.BookingListRelationFilter;
    masterServices?: Prisma.MasterServiceListRelationFilter;
}, "id">;
export type MasterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    previewImage?: Prisma.SortOrder;
    _count?: Prisma.MasterCountOrderByAggregateInput;
    _max?: Prisma.MasterMaxOrderByAggregateInput;
    _min?: Prisma.MasterMinOrderByAggregateInput;
};
export type MasterScalarWhereWithAggregatesInput = {
    AND?: Prisma.MasterScalarWhereWithAggregatesInput | Prisma.MasterScalarWhereWithAggregatesInput[];
    OR?: Prisma.MasterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MasterScalarWhereWithAggregatesInput | Prisma.MasterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Master"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Master"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Master"> | string;
    previewImage?: Prisma.StringWithAggregatesFilter<"Master"> | string;
};
export type MasterCreateInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutMasterInput;
    booking?: Prisma.BookingCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceCreateNestedManyWithoutMasterInput;
};
export type MasterUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutMasterInput;
    booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceUncheckedCreateNestedManyWithoutMasterInput;
};
export type MasterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutMasterNestedInput;
    booking?: Prisma.BookingUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUpdateManyWithoutMasterNestedInput;
};
export type MasterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutMasterNestedInput;
    booking?: Prisma.BookingUncheckedUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUncheckedUpdateManyWithoutMasterNestedInput;
};
export type MasterCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
};
export type MasterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MasterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MasterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    previewImage?: Prisma.SortOrder;
};
export type MasterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    previewImage?: Prisma.SortOrder;
};
export type MasterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    previewImage?: Prisma.SortOrder;
};
export type MasterScalarRelationFilter = {
    is?: Prisma.MasterWhereInput;
    isNot?: Prisma.MasterWhereInput;
};
export type MasterCreateNestedOneWithoutMasterServicesInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutMasterServicesInput, Prisma.MasterUncheckedCreateWithoutMasterServicesInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutMasterServicesInput;
    connect?: Prisma.MasterWhereUniqueInput;
};
export type MasterUpdateOneRequiredWithoutMasterServicesNestedInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutMasterServicesInput, Prisma.MasterUncheckedCreateWithoutMasterServicesInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutMasterServicesInput;
    upsert?: Prisma.MasterUpsertWithoutMasterServicesInput;
    connect?: Prisma.MasterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MasterUpdateToOneWithWhereWithoutMasterServicesInput, Prisma.MasterUpdateWithoutMasterServicesInput>, Prisma.MasterUncheckedUpdateWithoutMasterServicesInput>;
};
export type MasterCreateNestedOneWithoutTimeSlotsInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutTimeSlotsInput, Prisma.MasterUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutTimeSlotsInput;
    connect?: Prisma.MasterWhereUniqueInput;
};
export type MasterUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutTimeSlotsInput, Prisma.MasterUncheckedCreateWithoutTimeSlotsInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutTimeSlotsInput;
    upsert?: Prisma.MasterUpsertWithoutTimeSlotsInput;
    connect?: Prisma.MasterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MasterUpdateToOneWithWhereWithoutTimeSlotsInput, Prisma.MasterUpdateWithoutTimeSlotsInput>, Prisma.MasterUncheckedUpdateWithoutTimeSlotsInput>;
};
export type MasterCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutBookingInput, Prisma.MasterUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutBookingInput;
    connect?: Prisma.MasterWhereUniqueInput;
};
export type MasterUpdateOneRequiredWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.MasterCreateWithoutBookingInput, Prisma.MasterUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MasterCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.MasterUpsertWithoutBookingInput;
    connect?: Prisma.MasterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MasterUpdateToOneWithWhereWithoutBookingInput, Prisma.MasterUpdateWithoutBookingInput>, Prisma.MasterUncheckedUpdateWithoutBookingInput>;
};
export type MasterCreateWithoutMasterServicesInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutMasterInput;
    booking?: Prisma.BookingCreateNestedManyWithoutMasterInput;
};
export type MasterUncheckedCreateWithoutMasterServicesInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutMasterInput;
    booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMasterInput;
};
export type MasterCreateOrConnectWithoutMasterServicesInput = {
    where: Prisma.MasterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterCreateWithoutMasterServicesInput, Prisma.MasterUncheckedCreateWithoutMasterServicesInput>;
};
export type MasterUpsertWithoutMasterServicesInput = {
    update: Prisma.XOR<Prisma.MasterUpdateWithoutMasterServicesInput, Prisma.MasterUncheckedUpdateWithoutMasterServicesInput>;
    create: Prisma.XOR<Prisma.MasterCreateWithoutMasterServicesInput, Prisma.MasterUncheckedCreateWithoutMasterServicesInput>;
    where?: Prisma.MasterWhereInput;
};
export type MasterUpdateToOneWithWhereWithoutMasterServicesInput = {
    where?: Prisma.MasterWhereInput;
    data: Prisma.XOR<Prisma.MasterUpdateWithoutMasterServicesInput, Prisma.MasterUncheckedUpdateWithoutMasterServicesInput>;
};
export type MasterUpdateWithoutMasterServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutMasterNestedInput;
    booking?: Prisma.BookingUpdateManyWithoutMasterNestedInput;
};
export type MasterUncheckedUpdateWithoutMasterServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutMasterNestedInput;
    booking?: Prisma.BookingUncheckedUpdateManyWithoutMasterNestedInput;
};
export type MasterCreateWithoutTimeSlotsInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    booking?: Prisma.BookingCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceCreateNestedManyWithoutMasterInput;
};
export type MasterUncheckedCreateWithoutTimeSlotsInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceUncheckedCreateNestedManyWithoutMasterInput;
};
export type MasterCreateOrConnectWithoutTimeSlotsInput = {
    where: Prisma.MasterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterCreateWithoutTimeSlotsInput, Prisma.MasterUncheckedCreateWithoutTimeSlotsInput>;
};
export type MasterUpsertWithoutTimeSlotsInput = {
    update: Prisma.XOR<Prisma.MasterUpdateWithoutTimeSlotsInput, Prisma.MasterUncheckedUpdateWithoutTimeSlotsInput>;
    create: Prisma.XOR<Prisma.MasterCreateWithoutTimeSlotsInput, Prisma.MasterUncheckedCreateWithoutTimeSlotsInput>;
    where?: Prisma.MasterWhereInput;
};
export type MasterUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: Prisma.MasterWhereInput;
    data: Prisma.XOR<Prisma.MasterUpdateWithoutTimeSlotsInput, Prisma.MasterUncheckedUpdateWithoutTimeSlotsInput>;
};
export type MasterUpdateWithoutTimeSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    booking?: Prisma.BookingUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUpdateManyWithoutMasterNestedInput;
};
export type MasterUncheckedUpdateWithoutTimeSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    booking?: Prisma.BookingUncheckedUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUncheckedUpdateManyWithoutMasterNestedInput;
};
export type MasterCreateWithoutBookingInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceCreateNestedManyWithoutMasterInput;
};
export type MasterUncheckedCreateWithoutBookingInput = {
    id?: string;
    name: string;
    description: string;
    previewImage: string;
    timeSlots?: Prisma.TimeSlotUncheckedCreateNestedManyWithoutMasterInput;
    masterServices?: Prisma.MasterServiceUncheckedCreateNestedManyWithoutMasterInput;
};
export type MasterCreateOrConnectWithoutBookingInput = {
    where: Prisma.MasterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterCreateWithoutBookingInput, Prisma.MasterUncheckedCreateWithoutBookingInput>;
};
export type MasterUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.MasterUpdateWithoutBookingInput, Prisma.MasterUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.MasterCreateWithoutBookingInput, Prisma.MasterUncheckedCreateWithoutBookingInput>;
    where?: Prisma.MasterWhereInput;
};
export type MasterUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.MasterWhereInput;
    data: Prisma.XOR<Prisma.MasterUpdateWithoutBookingInput, Prisma.MasterUncheckedUpdateWithoutBookingInput>;
};
export type MasterUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUpdateManyWithoutMasterNestedInput;
};
export type MasterUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    previewImage?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlots?: Prisma.TimeSlotUncheckedUpdateManyWithoutMasterNestedInput;
    masterServices?: Prisma.MasterServiceUncheckedUpdateManyWithoutMasterNestedInput;
};
export type MasterCountOutputType = {
    timeSlots: number;
    booking: number;
    masterServices: number;
};
export type MasterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timeSlots?: boolean | MasterCountOutputTypeCountTimeSlotsArgs;
    booking?: boolean | MasterCountOutputTypeCountBookingArgs;
    masterServices?: boolean | MasterCountOutputTypeCountMasterServicesArgs;
};
export type MasterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterCountOutputTypeSelect<ExtArgs> | null;
};
export type MasterCountOutputTypeCountTimeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
};
export type MasterCountOutputTypeCountBookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type MasterCountOutputTypeCountMasterServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterServiceWhereInput;
};
export type MasterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    previewImage?: boolean;
    timeSlots?: boolean | Prisma.Master$timeSlotsArgs<ExtArgs>;
    booking?: boolean | Prisma.Master$bookingArgs<ExtArgs>;
    masterServices?: boolean | Prisma.Master$masterServicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MasterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["master"]>;
export type MasterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    previewImage?: boolean;
}, ExtArgs["result"]["master"]>;
export type MasterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    previewImage?: boolean;
}, ExtArgs["result"]["master"]>;
export type MasterSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    previewImage?: boolean;
};
export type MasterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "previewImage", ExtArgs["result"]["master"]>;
export type MasterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timeSlots?: boolean | Prisma.Master$timeSlotsArgs<ExtArgs>;
    booking?: boolean | Prisma.Master$bookingArgs<ExtArgs>;
    masterServices?: boolean | Prisma.Master$masterServicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MasterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MasterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MasterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MasterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Master";
    objects: {
        timeSlots: Prisma.$TimeSlotPayload<ExtArgs>[];
        booking: Prisma.$BookingPayload<ExtArgs>[];
        masterServices: Prisma.$MasterServicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string;
        previewImage: string;
    }, ExtArgs["result"]["master"]>;
    composites: {};
};
export type MasterGetPayload<S extends boolean | null | undefined | MasterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MasterPayload, S>;
export type MasterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MasterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MasterCountAggregateInputType | true;
};
export interface MasterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Master'];
        meta: {
            name: 'Master';
        };
    };
    findUnique<T extends MasterFindUniqueArgs>(args: Prisma.SelectSubset<T, MasterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MasterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MasterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MasterFindFirstArgs>(args?: Prisma.SelectSubset<T, MasterFindFirstArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MasterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MasterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MasterFindManyArgs>(args?: Prisma.SelectSubset<T, MasterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MasterCreateArgs>(args: Prisma.SelectSubset<T, MasterCreateArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MasterCreateManyArgs>(args?: Prisma.SelectSubset<T, MasterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MasterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MasterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MasterDeleteArgs>(args: Prisma.SelectSubset<T, MasterDeleteArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MasterUpdateArgs>(args: Prisma.SelectSubset<T, MasterUpdateArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MasterDeleteManyArgs>(args?: Prisma.SelectSubset<T, MasterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MasterUpdateManyArgs>(args: Prisma.SelectSubset<T, MasterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MasterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MasterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MasterUpsertArgs>(args: Prisma.SelectSubset<T, MasterUpsertArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MasterCountArgs>(args?: Prisma.Subset<T, MasterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MasterCountAggregateOutputType> : number>;
    aggregate<T extends MasterAggregateArgs>(args: Prisma.Subset<T, MasterAggregateArgs>): Prisma.PrismaPromise<GetMasterAggregateType<T>>;
    groupBy<T extends MasterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MasterGroupByArgs['orderBy'];
    } : {
        orderBy?: MasterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MasterFieldRefs;
}
export interface Prisma__MasterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    timeSlots<T extends Prisma.Master$timeSlotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Master$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    booking<T extends Prisma.Master$bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Master$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    masterServices<T extends Prisma.Master$masterServicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Master$masterServicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MasterFieldRefs {
    readonly id: Prisma.FieldRef<"Master", 'String'>;
    readonly name: Prisma.FieldRef<"Master", 'String'>;
    readonly description: Prisma.FieldRef<"Master", 'String'>;
    readonly previewImage: Prisma.FieldRef<"Master", 'String'>;
}
export type MasterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where: Prisma.MasterWhereUniqueInput;
};
export type MasterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where: Prisma.MasterWhereUniqueInput;
};
export type MasterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where?: Prisma.MasterWhereInput;
    orderBy?: Prisma.MasterOrderByWithRelationInput | Prisma.MasterOrderByWithRelationInput[];
    cursor?: Prisma.MasterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterScalarFieldEnum | Prisma.MasterScalarFieldEnum[];
};
export type MasterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where?: Prisma.MasterWhereInput;
    orderBy?: Prisma.MasterOrderByWithRelationInput | Prisma.MasterOrderByWithRelationInput[];
    cursor?: Prisma.MasterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterScalarFieldEnum | Prisma.MasterScalarFieldEnum[];
};
export type MasterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where?: Prisma.MasterWhereInput;
    orderBy?: Prisma.MasterOrderByWithRelationInput | Prisma.MasterOrderByWithRelationInput[];
    cursor?: Prisma.MasterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MasterScalarFieldEnum | Prisma.MasterScalarFieldEnum[];
};
export type MasterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterCreateInput, Prisma.MasterUncheckedCreateInput>;
};
export type MasterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MasterCreateManyInput | Prisma.MasterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MasterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    data: Prisma.MasterCreateManyInput | Prisma.MasterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MasterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterUpdateInput, Prisma.MasterUncheckedUpdateInput>;
    where: Prisma.MasterWhereUniqueInput;
};
export type MasterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MasterUpdateManyMutationInput, Prisma.MasterUncheckedUpdateManyInput>;
    where?: Prisma.MasterWhereInput;
    limit?: number;
};
export type MasterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MasterUpdateManyMutationInput, Prisma.MasterUncheckedUpdateManyInput>;
    where?: Prisma.MasterWhereInput;
    limit?: number;
};
export type MasterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where: Prisma.MasterWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterCreateInput, Prisma.MasterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MasterUpdateInput, Prisma.MasterUncheckedUpdateInput>;
};
export type MasterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
    where: Prisma.MasterWhereUniqueInput;
};
export type MasterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterWhereInput;
    limit?: number;
};
export type Master$timeSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithRelationInput | Prisma.TimeSlotOrderByWithRelationInput[];
    cursor?: Prisma.TimeSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TimeSlotScalarFieldEnum | Prisma.TimeSlotScalarFieldEnum[];
};
export type Master$bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type Master$masterServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MasterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MasterSelect<ExtArgs> | null;
    omit?: Prisma.MasterOmit<ExtArgs> | null;
    include?: Prisma.MasterInclude<ExtArgs> | null;
};
export {};

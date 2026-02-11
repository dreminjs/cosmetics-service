import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TimeSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$TimeSlotPayload>;
export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null;
    _min: TimeSlotMinAggregateOutputType | null;
    _max: TimeSlotMaxAggregateOutputType | null;
};
export type TimeSlotMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    startTime: string | null;
    endTime: string | null;
    masterId: string | null;
};
export type TimeSlotMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    startTime: string | null;
    endTime: string | null;
    masterId: string | null;
};
export type TimeSlotCountAggregateOutputType = {
    id: number;
    date: number;
    startTime: number;
    endTime: number;
    masterId: number;
    _all: number;
};
export type TimeSlotMinAggregateInputType = {
    id?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    masterId?: true;
};
export type TimeSlotMaxAggregateInputType = {
    id?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    masterId?: true;
};
export type TimeSlotCountAggregateInputType = {
    id?: true;
    date?: true;
    startTime?: true;
    endTime?: true;
    masterId?: true;
    _all?: true;
};
export type TimeSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithRelationInput | Prisma.TimeSlotOrderByWithRelationInput[];
    cursor?: Prisma.TimeSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TimeSlotCountAggregateInputType;
    _min?: TimeSlotMinAggregateInputType;
    _max?: TimeSlotMaxAggregateInputType;
};
export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTimeSlot[P]> : Prisma.GetScalarType<T[P], AggregateTimeSlot[P]>;
};
export type TimeSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithAggregationInput | Prisma.TimeSlotOrderByWithAggregationInput[];
    by: Prisma.TimeSlotScalarFieldEnum[] | Prisma.TimeSlotScalarFieldEnum;
    having?: Prisma.TimeSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TimeSlotCountAggregateInputType | true;
    _min?: TimeSlotMinAggregateInputType;
    _max?: TimeSlotMaxAggregateInputType;
};
export type TimeSlotGroupByOutputType = {
    id: string;
    date: Date;
    startTime: string;
    endTime: string;
    masterId: string;
    _count: TimeSlotCountAggregateOutputType | null;
    _min: TimeSlotMinAggregateOutputType | null;
    _max: TimeSlotMaxAggregateOutputType | null;
};
type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TimeSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TimeSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TimeSlotGroupByOutputType[P]>;
}>>;
export type TimeSlotWhereInput = {
    AND?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    OR?: Prisma.TimeSlotWhereInput[];
    NOT?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    id?: Prisma.StringFilter<"TimeSlot"> | string;
    date?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    startTime?: Prisma.StringFilter<"TimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TimeSlot"> | string;
    masterId?: Prisma.StringFilter<"TimeSlot"> | string;
    master?: Prisma.XOR<Prisma.MasterScalarRelationFilter, Prisma.MasterWhereInput>;
    booking?: Prisma.XOR<Prisma.BookingNullableScalarRelationFilter, Prisma.BookingWhereInput> | null;
};
export type TimeSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    master?: Prisma.MasterOrderByWithRelationInput;
    booking?: Prisma.BookingOrderByWithRelationInput;
};
export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    masterId_date_startTime_endTime?: Prisma.TimeSlotMasterIdDateStartTimeEndTimeCompoundUniqueInput;
    AND?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    OR?: Prisma.TimeSlotWhereInput[];
    NOT?: Prisma.TimeSlotWhereInput | Prisma.TimeSlotWhereInput[];
    date?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    startTime?: Prisma.StringFilter<"TimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TimeSlot"> | string;
    masterId?: Prisma.StringFilter<"TimeSlot"> | string;
    master?: Prisma.XOR<Prisma.MasterScalarRelationFilter, Prisma.MasterWhereInput>;
    booking?: Prisma.XOR<Prisma.BookingNullableScalarRelationFilter, Prisma.BookingWhereInput> | null;
}, "id" | "masterId_date_startTime_endTime">;
export type TimeSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
    _count?: Prisma.TimeSlotCountOrderByAggregateInput;
    _max?: Prisma.TimeSlotMaxOrderByAggregateInput;
    _min?: Prisma.TimeSlotMinOrderByAggregateInput;
};
export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.TimeSlotScalarWhereWithAggregatesInput | Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TimeSlotScalarWhereWithAggregatesInput | Prisma.TimeSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TimeSlot"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string;
    startTime?: Prisma.StringWithAggregatesFilter<"TimeSlot"> | string;
    endTime?: Prisma.StringWithAggregatesFilter<"TimeSlot"> | string;
    masterId?: Prisma.StringWithAggregatesFilter<"TimeSlot"> | string;
};
export type TimeSlotCreateInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    master: Prisma.MasterCreateNestedOneWithoutTimeSlotsInput;
    booking?: Prisma.BookingCreateNestedOneWithoutTimeSlotInput;
};
export type TimeSlotUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    masterId: string;
    booking?: Prisma.BookingUncheckedCreateNestedOneWithoutTimeSlotInput;
};
export type TimeSlotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    master?: Prisma.MasterUpdateOneRequiredWithoutTimeSlotsNestedInput;
    booking?: Prisma.BookingUpdateOneWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
    booking?: Prisma.BookingUncheckedUpdateOneWithoutTimeSlotNestedInput;
};
export type TimeSlotCreateManyInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    masterId: string;
};
export type TimeSlotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TimeSlotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TimeSlotListRelationFilter = {
    every?: Prisma.TimeSlotWhereInput;
    some?: Prisma.TimeSlotWhereInput;
    none?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TimeSlotMasterIdDateStartTimeEndTimeCompoundUniqueInput = {
    masterId: string;
    date: Date | string;
    startTime: string;
    endTime: string;
};
export type TimeSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
};
export type TimeSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
};
export type TimeSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    masterId?: Prisma.SortOrder;
};
export type TimeSlotScalarRelationFilter = {
    is?: Prisma.TimeSlotWhereInput;
    isNot?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotCreateNestedManyWithoutMasterInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput> | Prisma.TimeSlotCreateWithoutMasterInput[] | Prisma.TimeSlotUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutMasterInput | Prisma.TimeSlotCreateOrConnectWithoutMasterInput[];
    createMany?: Prisma.TimeSlotCreateManyMasterInputEnvelope;
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
};
export type TimeSlotUncheckedCreateNestedManyWithoutMasterInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput> | Prisma.TimeSlotCreateWithoutMasterInput[] | Prisma.TimeSlotUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutMasterInput | Prisma.TimeSlotCreateOrConnectWithoutMasterInput[];
    createMany?: Prisma.TimeSlotCreateManyMasterInputEnvelope;
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
};
export type TimeSlotUpdateManyWithoutMasterNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput> | Prisma.TimeSlotCreateWithoutMasterInput[] | Prisma.TimeSlotUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutMasterInput | Prisma.TimeSlotCreateOrConnectWithoutMasterInput[];
    upsert?: Prisma.TimeSlotUpsertWithWhereUniqueWithoutMasterInput | Prisma.TimeSlotUpsertWithWhereUniqueWithoutMasterInput[];
    createMany?: Prisma.TimeSlotCreateManyMasterInputEnvelope;
    set?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    delete?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    update?: Prisma.TimeSlotUpdateWithWhereUniqueWithoutMasterInput | Prisma.TimeSlotUpdateWithWhereUniqueWithoutMasterInput[];
    updateMany?: Prisma.TimeSlotUpdateManyWithWhereWithoutMasterInput | Prisma.TimeSlotUpdateManyWithWhereWithoutMasterInput[];
    deleteMany?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
};
export type TimeSlotUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput> | Prisma.TimeSlotCreateWithoutMasterInput[] | Prisma.TimeSlotUncheckedCreateWithoutMasterInput[];
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutMasterInput | Prisma.TimeSlotCreateOrConnectWithoutMasterInput[];
    upsert?: Prisma.TimeSlotUpsertWithWhereUniqueWithoutMasterInput | Prisma.TimeSlotUpsertWithWhereUniqueWithoutMasterInput[];
    createMany?: Prisma.TimeSlotCreateManyMasterInputEnvelope;
    set?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    disconnect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    delete?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    connect?: Prisma.TimeSlotWhereUniqueInput | Prisma.TimeSlotWhereUniqueInput[];
    update?: Prisma.TimeSlotUpdateWithWhereUniqueWithoutMasterInput | Prisma.TimeSlotUpdateWithWhereUniqueWithoutMasterInput[];
    updateMany?: Prisma.TimeSlotUpdateManyWithWhereWithoutMasterInput | Prisma.TimeSlotUpdateManyWithWhereWithoutMasterInput[];
    deleteMany?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
};
export type TimeSlotCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutBookingInput, Prisma.TimeSlotUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutBookingInput;
    connect?: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotUpdateOneRequiredWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.TimeSlotCreateWithoutBookingInput, Prisma.TimeSlotUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.TimeSlotCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.TimeSlotUpsertWithoutBookingInput;
    connect?: Prisma.TimeSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TimeSlotUpdateToOneWithWhereWithoutBookingInput, Prisma.TimeSlotUpdateWithoutBookingInput>, Prisma.TimeSlotUncheckedUpdateWithoutBookingInput>;
};
export type TimeSlotCreateWithoutMasterInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    booking?: Prisma.BookingCreateNestedOneWithoutTimeSlotInput;
};
export type TimeSlotUncheckedCreateWithoutMasterInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    booking?: Prisma.BookingUncheckedCreateNestedOneWithoutTimeSlotInput;
};
export type TimeSlotCreateOrConnectWithoutMasterInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput>;
};
export type TimeSlotCreateManyMasterInputEnvelope = {
    data: Prisma.TimeSlotCreateManyMasterInput | Prisma.TimeSlotCreateManyMasterInput[];
    skipDuplicates?: boolean;
};
export type TimeSlotUpsertWithWhereUniqueWithoutMasterInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    update: Prisma.XOR<Prisma.TimeSlotUpdateWithoutMasterInput, Prisma.TimeSlotUncheckedUpdateWithoutMasterInput>;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutMasterInput, Prisma.TimeSlotUncheckedCreateWithoutMasterInput>;
};
export type TimeSlotUpdateWithWhereUniqueWithoutMasterInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateWithoutMasterInput, Prisma.TimeSlotUncheckedUpdateWithoutMasterInput>;
};
export type TimeSlotUpdateManyWithWhereWithoutMasterInput = {
    where: Prisma.TimeSlotScalarWhereInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateManyMutationInput, Prisma.TimeSlotUncheckedUpdateManyWithoutMasterInput>;
};
export type TimeSlotScalarWhereInput = {
    AND?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
    OR?: Prisma.TimeSlotScalarWhereInput[];
    NOT?: Prisma.TimeSlotScalarWhereInput | Prisma.TimeSlotScalarWhereInput[];
    id?: Prisma.StringFilter<"TimeSlot"> | string;
    date?: Prisma.DateTimeFilter<"TimeSlot"> | Date | string;
    startTime?: Prisma.StringFilter<"TimeSlot"> | string;
    endTime?: Prisma.StringFilter<"TimeSlot"> | string;
    masterId?: Prisma.StringFilter<"TimeSlot"> | string;
};
export type TimeSlotCreateWithoutBookingInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    master: Prisma.MasterCreateNestedOneWithoutTimeSlotsInput;
};
export type TimeSlotUncheckedCreateWithoutBookingInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
    masterId: string;
};
export type TimeSlotCreateOrConnectWithoutBookingInput = {
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutBookingInput, Prisma.TimeSlotUncheckedCreateWithoutBookingInput>;
};
export type TimeSlotUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.TimeSlotUpdateWithoutBookingInput, Prisma.TimeSlotUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.TimeSlotCreateWithoutBookingInput, Prisma.TimeSlotUncheckedCreateWithoutBookingInput>;
    where?: Prisma.TimeSlotWhereInput;
};
export type TimeSlotUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.TimeSlotWhereInput;
    data: Prisma.XOR<Prisma.TimeSlotUpdateWithoutBookingInput, Prisma.TimeSlotUncheckedUpdateWithoutBookingInput>;
};
export type TimeSlotUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    master?: Prisma.MasterUpdateOneRequiredWithoutTimeSlotsNestedInput;
};
export type TimeSlotUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    masterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TimeSlotCreateManyMasterInput = {
    id?: string;
    date: Date | string;
    startTime: string;
    endTime: string;
};
export type TimeSlotUpdateWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    booking?: Prisma.BookingUpdateOneWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
    booking?: Prisma.BookingUncheckedUpdateOneWithoutTimeSlotNestedInput;
};
export type TimeSlotUncheckedUpdateManyWithoutMasterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    startTime?: Prisma.StringFieldUpdateOperationsInput | string;
    endTime?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TimeSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    masterId?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.TimeSlot$bookingArgs<ExtArgs>;
}, ExtArgs["result"]["timeSlot"]>;
export type TimeSlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    masterId?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timeSlot"]>;
export type TimeSlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    masterId?: boolean;
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["timeSlot"]>;
export type TimeSlotSelectScalar = {
    id?: boolean;
    date?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    masterId?: boolean;
};
export type TimeSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "masterId", ExtArgs["result"]["timeSlot"]>;
export type TimeSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
    booking?: boolean | Prisma.TimeSlot$bookingArgs<ExtArgs>;
};
export type TimeSlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
};
export type TimeSlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    master?: boolean | Prisma.MasterDefaultArgs<ExtArgs>;
};
export type $TimeSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TimeSlot";
    objects: {
        master: Prisma.$MasterPayload<ExtArgs>;
        booking: Prisma.$BookingPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        startTime: string;
        endTime: string;
        masterId: string;
    }, ExtArgs["result"]["timeSlot"]>;
    composites: {};
};
export type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload, S>;
export type TimeSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TimeSlotCountAggregateInputType | true;
};
export interface TimeSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'];
        meta: {
            name: 'TimeSlot';
        };
    };
    findUnique<T extends TimeSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TimeSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TimeSlotFindManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TimeSlotCreateArgs>(args: Prisma.SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TimeSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TimeSlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TimeSlotDeleteArgs>(args: Prisma.SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TimeSlotUpdateArgs>(args: Prisma.SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TimeSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TimeSlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TimeSlotUpsertArgs>(args: Prisma.SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__TimeSlotClient<runtime.Types.Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TimeSlotCountArgs>(args?: Prisma.Subset<T, TimeSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TimeSlotCountAggregateOutputType> : number>;
    aggregate<T extends TimeSlotAggregateArgs>(args: Prisma.Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>;
    groupBy<T extends TimeSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TimeSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: TimeSlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TimeSlotFieldRefs;
}
export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    master<T extends Prisma.MasterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MasterDefaultArgs<ExtArgs>>): Prisma.Prisma__MasterClient<runtime.Types.Result.GetResult<Prisma.$MasterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    booking<T extends Prisma.TimeSlot$bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TimeSlot$bookingArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TimeSlotFieldRefs {
    readonly id: Prisma.FieldRef<"TimeSlot", 'String'>;
    readonly date: Prisma.FieldRef<"TimeSlot", 'DateTime'>;
    readonly startTime: Prisma.FieldRef<"TimeSlot", 'String'>;
    readonly endTime: Prisma.FieldRef<"TimeSlot", 'String'>;
    readonly masterId: Prisma.FieldRef<"TimeSlot", 'String'>;
}
export type TimeSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TimeSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimeSlotCreateInput, Prisma.TimeSlotUncheckedCreateInput>;
};
export type TimeSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TimeSlotCreateManyInput | Prisma.TimeSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TimeSlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    data: Prisma.TimeSlotCreateManyInput | Prisma.TimeSlotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TimeSlotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TimeSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimeSlotUpdateInput, Prisma.TimeSlotUncheckedUpdateInput>;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TimeSlotUpdateManyMutationInput, Prisma.TimeSlotUncheckedUpdateManyInput>;
    where?: Prisma.TimeSlotWhereInput;
    limit?: number;
};
export type TimeSlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TimeSlotUpdateManyMutationInput, Prisma.TimeSlotUncheckedUpdateManyInput>;
    where?: Prisma.TimeSlotWhereInput;
    limit?: number;
    include?: Prisma.TimeSlotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TimeSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.TimeSlotCreateInput, Prisma.TimeSlotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TimeSlotUpdateInput, Prisma.TimeSlotUncheckedUpdateInput>;
};
export type TimeSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
    where: Prisma.TimeSlotWhereUniqueInput;
};
export type TimeSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TimeSlotWhereInput;
    limit?: number;
};
export type TimeSlot$bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
};
export type TimeSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TimeSlotSelect<ExtArgs> | null;
    omit?: Prisma.TimeSlotOmit<ExtArgs> | null;
    include?: Prisma.TimeSlotInclude<ExtArgs> | null;
};
export {};

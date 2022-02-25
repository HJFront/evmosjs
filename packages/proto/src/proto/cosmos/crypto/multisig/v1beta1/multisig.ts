// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/crypto/multisig/v1beta1/multisig.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.crypto.multisig.v1beta1 {
    export class MultiSignature extends pb_1.Message {
        constructor(data?: any[] | {
            signatures?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("signatures" in data && data.signatures != undefined) {
                    this.signatures = data.signatures;
                }
            }
        }
        get signatures() {
            return pb_1.Message.getField(this, 1) as Uint8Array[];
        }
        set signatures(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            signatures?: Uint8Array[];
        }) {
            const message = new MultiSignature({});
            if (data.signatures != null) {
                message.signatures = data.signatures;
            }
            return message;
        }
        toObject() {
            const data: {
                signatures?: Uint8Array[];
            } = {};
            if (this.signatures != null) {
                data.signatures = this.signatures;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.signatures !== undefined)
                writer.writeRepeatedBytes(1, this.signatures);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MultiSignature {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MultiSignature();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MultiSignature {
            return MultiSignature.deserialize(bytes);
        }
    }
    export class CompactBitArray extends pb_1.Message {
        constructor(data?: any[] | {
            extra_bits_stored?: number;
            elems?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("extra_bits_stored" in data && data.extra_bits_stored != undefined) {
                    this.extra_bits_stored = data.extra_bits_stored;
                }
                if ("elems" in data && data.elems != undefined) {
                    this.elems = data.elems;
                }
            }
        }
        get extra_bits_stored() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set extra_bits_stored(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get elems() {
            return pb_1.Message.getField(this, 2) as Uint8Array;
        }
        set elems(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            extra_bits_stored?: number;
            elems?: Uint8Array;
        }) {
            const message = new CompactBitArray({});
            if (data.extra_bits_stored != null) {
                message.extra_bits_stored = data.extra_bits_stored;
            }
            if (data.elems != null) {
                message.elems = data.elems;
            }
            return message;
        }
        toObject() {
            const data: {
                extra_bits_stored?: number;
                elems?: Uint8Array;
            } = {};
            if (this.extra_bits_stored != null) {
                data.extra_bits_stored = this.extra_bits_stored;
            }
            if (this.elems != null) {
                data.elems = this.elems;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.extra_bits_stored !== undefined)
                writer.writeUint32(1, this.extra_bits_stored);
            if (this.elems !== undefined)
                writer.writeBytes(2, this.elems);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CompactBitArray {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CompactBitArray();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.extra_bits_stored = reader.readUint32();
                        break;
                    case 2:
                        message.elems = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CompactBitArray {
            return CompactBitArray.deserialize(bytes);
        }
    }
}

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: route_guide.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11route_guide.proto\",\n\x05Point\x12\x10\n\x08latitude\x18\x01 \x01(\x05\x12\x11\n\tlongitude\x18\x02 \x01(\x05\"1\n\x07\x46\x65\x61ture\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x18\n\x08location\x18\x02 \x01(\x0b\x32\x06.Point\"6\n\tRouteNote\x12\x18\n\x08location\x18\x01 \x01(\x0b\x32\x06.Point\x12\x0f\n\x07message\x18\x02 \x01(\t2.\n\nRouteGuide\x12 \n\nGetFeature\x12\x06.Point\x1a\x08.Feature\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'route_guide_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_POINT']._serialized_start=21
  _globals['_POINT']._serialized_end=65
  _globals['_FEATURE']._serialized_start=67
  _globals['_FEATURE']._serialized_end=116
  _globals['_ROUTENOTE']._serialized_start=118
  _globals['_ROUTENOTE']._serialized_end=172
  _globals['_ROUTEGUIDE']._serialized_start=174
  _globals['_ROUTEGUIDE']._serialized_end=220
# @@protoc_insertion_point(module_scope)

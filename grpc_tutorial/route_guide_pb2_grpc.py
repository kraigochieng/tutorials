# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import route_guide_pb2 as route__guide__pb2


class RouteGuideStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetFeature = channel.unary_unary(
                '/RouteGuide/GetFeature',
                request_serializer=route__guide__pb2.Point.SerializeToString,
                response_deserializer=route__guide__pb2.Feature.FromString,
                )


class RouteGuideServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetFeature(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_RouteGuideServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetFeature': grpc.unary_unary_rpc_method_handler(
                    servicer.GetFeature,
                    request_deserializer=route__guide__pb2.Point.FromString,
                    response_serializer=route__guide__pb2.Feature.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'RouteGuide', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class RouteGuide(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetFeature(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/RouteGuide/GetFeature',
            route__guide__pb2.Point.SerializeToString,
            route__guide__pb2.Feature.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

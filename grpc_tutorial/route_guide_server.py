import grpc
import route_guide_pb2
import route_guide_pb2_grpc
import route_guide_resources
from concurrent.futures import ThreadPoolExecutor

from global_store import server_port

def get_feature(feature_db, point):
    for feature in feature_db:
        if feature.location == point:
            return feature
    return None


class RouteGuideServicer(route_guide_pb2_grpc.RouteGuideServicer):
    def __init__(self):
        self.db = route_guide_resources.read_route_guide_database()

    def GetFeature(self, request, context):
        feature = get_feature(self.db, request)

        if feature is None:
            return route_guide_pb2.Feature(name="", location=request)
        else:
            return feature


def serve():
    server = grpc.server(ThreadPoolExecutor(max_workers=10))
    route_guide_pb2_grpc.add_RouteGuideServicer_to_server(RouteGuideServicer(), server)
    server.add_insecure_port(f"[::]:{server_port}")
    server.start()
    print(f"Server Started. Listening on {server_port}")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()

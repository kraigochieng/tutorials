import grpc
import route_guide_pb2
import route_guide_pb2_grpc
import route_guide_resources
from global_store import server_port


def guide_get_feature(stub: route_guide_pb2_grpc.RouteGuideStub, point):
    feature: route_guide_pb2.Feature = stub.GetFeature(point)
    if not feature.location:
        print("No location")
        return

    if feature.name:
        print(f"{feature.name} {feature.location}")


def guide_get_feature_test(stub):
    guide_get_feature(stub, route_guide_pb2.Point(latitude=409146138, longitude=-746188906))
    guide_get_feature(stub, route_guide_pb2.Point(latitude=0, longitude=0))


def run():
    with grpc.insecure_channel(f"localhost:{server_port}") as channel:
        stub = route_guide_pb2_grpc.RouteGuideStub(channel=channel)
        print("Get Feature")
        guide_get_feature_test(stub)


if __name__ == "__main__":
    run()

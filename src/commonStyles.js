import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 343,
  },
  font: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  // Registration, Login
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  heroButton: {
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 27,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingBottom: 16,
    paddingTop: 16,
  },
  form: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: "25px 25px 0px 0px",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 128,
    top: -60,
  },
  input: {
    marginBottom: 16,
    paddingLeft: 16,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
  inputActive: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    padding: 15,
    maxHeight: 50,
    marginBottom: 16,
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },

  showPosition: {
    position: "absolute",
    right: 12,
    bottom: 32,
  },
  showText: {
    color: "#1B4371",
    fontFamily: "Roboto-Light",
  },
  // CreatePostsScreen
  header: {
    paddingTop: 44,
    borderTopWidth: 1,
    borderTopColor: "#212121",
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    paddingTop: 11,
    paddingBottom: 11,
  },
  zeroLeftPosition: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  // CommentsScreen
  commenter: {
    width: 300,
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#00000008",
    borderRadius: 6,
  },
  dateAndTime: {
    marginTop: 8,
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
  back: {
    color: "#808080",
    position: "absolute",
    bottom: 5,
    left: 16,
  },
  wrapper: {
    paddingTop: 32,
    paddingBottom: 34,
    paddingLeft: 24,
    paddingRight: 24,
    borderTopWidth: 1,
    borderTopColor: "rgba(33, 33, 33, 0.8)",
  },
  // PostsScreen
  publicationTitle: {
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
    color: "#212121",
  },
  publicationInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 34,
  },
  commentsNumber: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  locationIcon: {
    color: "#BDBDBD",
  },
  location: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
  },
  tabNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    minWidth: 390,
  },
});

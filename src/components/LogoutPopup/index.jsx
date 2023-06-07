import { Dialog } from "react-native-paper";
import { TouchableOpacity, Text } from "react-native";

export default function LogoutPopup({visible, showPopup, handleUserLogout}) {
  return (
    <Dialog 
      className="rounded-xl px-8"
      visible={visible}
    >
      <Dialog.Icon 
        icon="alert" 
        size={40}
      />
      
      <Dialog.Title 
        className="text-center text-xl">
        Are you sure, you want to logout?
      </Dialog.Title>

      <Dialog.Content 
        className="flex-row justify-center gap-x-8">
        <TouchableOpacity
          className="border-2 border-[#9450e7] px-8 py-1.5 rounded-md"
          onPress={() => showPopup(false)}>
          <Text 
            className="text-[#9450e7] font-semibold">
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#9450e7] px-8 py-1.5 rounded-md"
          onPress={handleUserLogout}>
          <Text 
            className="text-white font-semibold">
            Yes
          </Text>
        </TouchableOpacity>
      </Dialog.Content>
    </Dialog>
  );
}
# Python module to execute
import file_two_step_3

print("File one __name__ is set to: {}" .format(__name__))

def function_one():
    print("Function one is executed")

def function_two():
    print("Function three is executed")

if __name__ == "__main__":
    print("File one executed when ran directly")
    function_two()
else:
    print("File one executed when imported")
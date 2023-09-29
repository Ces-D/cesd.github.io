WORKSPACE_SCOPE="wasm"

WASM_NAME=$1

# get the create and check if it exists and is a directory
getWasmCrate(){
  local directory=$(cd `dirname $0` && pwd)
  local one_directory_up=$(cd $directory && cd .. && pwd)
  
  local crateRelativePath="$one_directory_up/${WASM_NAME}"
  if [ -d $crateRelativePath ]; then
    wasmCrate=$crateRelativePath
  else 
    echo "WasmCrate could not be found: ${crateRelativePath}"
  fi
}


while getopts ":r" flag
do 
  case "{flag}" in 
    r) release_build=${OPTARG || false};;
  esac
done

getWasmCrate
wasm-pack build $wasmCrate --scope WORKSPACE_SCOPE --release $release_build


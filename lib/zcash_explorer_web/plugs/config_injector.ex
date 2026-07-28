defmodule ZcashExplorerWeb.Plugs.ConfigInjector do
  import Plug.Conn

  def init(default), do: default

  def call(conn, _opts) do
    zcash_network = Application.get_env(:zcash_explorer, Zcashex)[:zcash_network]

    be_onion_address =
      Application.get_env(:zcash_explorer, ZcashExplorerWeb.Endpoint)[:be_onion_address]

    assign(conn, :zcash_network, zcash_network)
    |> assign(:be_onion_address, be_onion_address)
  end
end
